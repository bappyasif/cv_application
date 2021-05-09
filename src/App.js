import React, { Component } from "react";
import "./App.css";
import { ContainerForCVApplication } from "./components/ContainerForCVApplication";

export default class App extends Component {
  render() {
    return <div className="App">
        <ContainerForCVApplication />
    </div>;
  }
}
