import React, { Component } from "react";

class FormField extends Component {
  state = {};
  render() {
    return (
      <div className="margin field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input
            className="input"
            type={this.props.type}
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}

export default FormField;
