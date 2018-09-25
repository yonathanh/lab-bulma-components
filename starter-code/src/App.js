import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="form">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>
        <CoolButton name="Button1" className="button is-small is-success" />
        <CoolButton
          name="Button2"
          className="button is-rounded my-class is-danger is-small"
        />
      </div>
    );
  }
}

export default App;
