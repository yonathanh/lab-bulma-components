import React, { Component } from "react";
import CoolButton from "./CoolButton";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="#">
              Home
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <CoolButton
                    name="LogIn"
                    className="bd-tw-button button is-info"
                  />
                </p>
                <p className="control">
                  <CoolButton name="SignUp" className="button is-primary" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
