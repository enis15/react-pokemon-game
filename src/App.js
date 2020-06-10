import React, { Component } from "react";
import "./css/App.css";
// import Card from "./components/Card";
import Hand from "./components/Hand";

class App extends Component {
  getData(val) {
    console.log(val);
    return val;
  }

  render() {
    return (
      <div className="App">
        <center>
          <h2 id="win">Winning hand</h2>
          <Hand total={this.getData}></Hand>
          <h2 id="loss">Losing hand</h2>
          <Hand total={this.getData}></Hand>
        </center>
      </div>
    );
  }
}

export default App;
