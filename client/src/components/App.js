import { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="justify-content-center" dark={true}>
          Community Classroom
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-6">Login</div>
            <div className="col-6">Registration</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
