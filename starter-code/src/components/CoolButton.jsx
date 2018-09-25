import React, { Component } from "react";

class CoolButton extends Component {
  state = {};

  handleIncrement = () => {
    console.log("Increment Clicked");
  };

  render() {
    return (
      <button onClick={this.handleIncrement} className={this.props.className}>
        {this.props.name}
      </button>
    );
  }
}

export default CoolButton;
