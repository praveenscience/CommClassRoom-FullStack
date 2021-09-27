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
        Username: "",
        Password: "",
        FullName: "",
        Role: ""
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
              />
            </div>
            <div className="col-6">
              <Register
                Card={Card}
                handleFormChange={this.handleFormChange}
                Forms={this.state.Forms.Register}
                Errors={this.state.Errors.Register}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
