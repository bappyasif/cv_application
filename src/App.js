import React, { Component } from "react";
import "./App.css";
import { ContainerForCVApplication } from "./components/ContainerForCVApplication";
import { CVApplicationUsingHooks } from "./using_hooks/CVApplicationUsingHooks";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CVApplicationUsingHooks />
        <ContainerForCVApplication />
      </div>
    );
  }
}
