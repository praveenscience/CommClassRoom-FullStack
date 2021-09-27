import { Component } from "react";
import Card from "./Bootstrap/Card";
import Header from "./Bootstrap/Header";
import Login from "./Home/Login";
import Register from "./Home/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="justify-content-center" dark={true}>
          Community Classroom
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Login Card={Card} />
            </div>
            <div className="col-6">
              <Register Card={Card} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
