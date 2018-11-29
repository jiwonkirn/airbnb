import React, { Component } from "react";
import "./css/index.css";
import Layout from "./components/Layout";
import List from "./containers/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
        <List />
      </div>
    );
  }
}

export default App;
