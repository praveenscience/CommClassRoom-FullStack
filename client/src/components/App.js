import { Component } from "react";
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
    window.alert("Called Login Button!");
  };
  handleRegister = e => {
    e.preventDefault();
    window.alert("Called Registration Button!");
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
