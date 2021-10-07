import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginUser, LogoutUser, RegisterUser } from "../services/Auth";
import Card from "./Bootstrap/Card";
import Header from "./Bootstrap/Header";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Home/Login";
import Register from "./Home/Register";
import Profile from "./Profile/Profile";

const InitState = {
  User: null,
  Users: null,
  Forms: {
    Login: {
      Username: "",
      Password: ""
    },
    Register: {
      FullName: "",
      Email: "",
      Username: "",
      Role: "",
      Password: "",
      "Confirm Password": ""
    }
  },
  Errors: {
    Login: [],
    Register: []
  },
  Successes: {
    Login: [],
    Register: []
  }
};
class App extends Component {
  state = { ...InitState };
  handleFormChange = (Form, Name, Value) => {
    const Forms = { ...this.state.Forms };
    Forms[Form] = { ...this.state.Forms[Form] };
    Forms[Form][Name] = Value;
    this.setState({
      Forms
    });
  };
  handleLogin = e => {
    e.preventDefault();
    const Errors = { ...this.state.Errors };
    const Successes = { ...this.state.Successes };
    Errors.Login = [];
    Successes.Login = [];
    this.setState({
      Errors,
      Successes
    });
    const { Username, Password } = this.state.Forms.Login;
    LoginUser(Username, Password)
      .then(res => {
        const Successes = { ...this.state.Successes };
        if (res.status === 200) {
          Successes.Login.push(
            "User logged in Successfully! Taking you to the dashboard..."
          );
          this.setState(
            {
              Successes
            },
            () => {
              setTimeout(() => {
                this.setState({
                  User: res.data
                });
              }, 2000);
            }
          );
        }
      })
      .catch(err => {
        const Errors = { ...this.state.Errors };
        Errors.Login.push(err.response.data.Error);
        this.setState({
          Errors
        });
      });
  };
  handleRegister = e => {
    e.preventDefault();
    const Errors = { ...this.state.Errors };
    Errors.Register = [];
    const Successes = { ...this.state.Successes };
    Successes.Register = [];
    this.setState({
      Errors,
      Successes
    });
    const { Username, Email, Password, FullName, Role } =
      this.state.Forms.Register;
    RegisterUser(Username, Password, FullName, Email, Role)
      .then(res => {
        const Successes = { ...this.state.Successes };
        Successes.Register.push(res.data.Message);
        this.setState({
          Successes
        });
      })
      .catch(err => {
        const Errors = { ...this.state.Errors };
        Errors.Register.push(err.response.data.Error);
        this.setState({
          Errors
        });
      });
  };
  handleLogout = e => {
    e.preventDefault();
    LogoutUser().then(() => {
      this.setState({ ...InitState });
    });
  };
  render() {
    return (
      <div className="App">
        <Header className="justify-content-center" dark={true}>
          Community Classroom
        </Header>
        <div className="container">
          {this.state.User ? (
            <Switch>
              <Route path="/" exact={true}>
                <Dashboard
                  handleLogout={this.handleLogout}
                  Card={Card}
                  User={this.state.User}
                />
              </Route>
              <Route
                path="/users/:Username"
                render={rp => <Profile {...rp} Card={Card} />}
              />
            </Switch>
          ) : (
            <div className="row">
              <div className="col-6">
                <Login
                  Card={Card}
                  handleFormChange={this.handleFormChange}
                  Forms={this.state.Forms.Login}
                  Errors={this.state.Errors.Login}
                  Successes={this.state.Successes.Login}
                  handleFormSubmit={this.handleLogin}
                />
              </div>
              <div className="col-6">
                <Register
                  Card={Card}
                  handleFormChange={this.handleFormChange}
                  Forms={this.state.Forms.Register}
                  Errors={this.state.Errors.Register}
                  Successes={this.state.Successes.Register}
                  handleFormSubmit={this.handleRegister}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
