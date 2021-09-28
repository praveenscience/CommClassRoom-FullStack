import { Component } from "react";
import { LoginUser, RegisterUser } from "../services/Auth";
import Card from "./Bootstrap/Card";
import Header from "./Bootstrap/Header";
import Login from "./Home/Login";
import Register from "./Home/Register";

class App extends Component {
  state = {
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
  handleFormChange = (Form, Name, Value) => {
    const Forms = { ...this.state.Forms };
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
        Successes.Login.push(
          "User logged in Successfully! Taking you to the dashboard..."
        );
        this.setState({
          Successes
        });
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
    this.setState({
      Errors
    });
    const { Username, Email, Password, FullName, Role } =
      this.state.Forms.Register;
    RegisterUser(Username, Password, FullName, Email, Role)
      .then(res => console.log(res.data))
      .catch(err => {
        const Errors = { ...this.state.Errors };
        Errors.Register.push(err.response.data.Error);
        this.setState({
          Errors
        });
      });
  };
  render() {
    return (
      <div className="App">
        <Header className="justify-content-center" dark={true}>
          Community Classroom
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Login
                Card={Card}
                handleFormChange={this.handleFormChange}
                Forms={this.state.Forms.Login}
                Errors={this.state.Errors.Login}
                handleFormSubmit={this.handleLogin}
                Successes={this.state.Successes.Login}
              />
            </div>
            <div className="col-6">
              <Register
                Card={Card}
                handleFormChange={this.handleFormChange}
                Forms={this.state.Forms.Register}
                Errors={this.state.Errors.Register}
                handleFormSubmit={this.handleRegister}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <pre className="mt-3 bg-black bg-opacity-10 border rounded p-3">
                {JSON.stringify(this.state, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
