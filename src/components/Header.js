import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";

// the Header takes a child component as a prop
// the component is placed in between the tags wherever the header component is used

const style = {
  display: "inline-block",
  margin: 10,
  marginBottom: 30
};

class Header extends Component {
  render() {
    return (
      <div>
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="f6 ttu tracked ">
            <Link className="link dim white dib mr3 fw6" to="/">
              Home
            </Link>
            <Link className="link dim white dib mr3 fw6" to="/jokes">
              Jokes
            </Link>
            <Link className="link dim white dib mr3 fw6" to="/musicaly">
              Musicaly
            </Link>
            <Link className="link dim white dib mr3 fw6" to="/robots">
              Robots
            </Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
