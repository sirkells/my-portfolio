import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <h3 style={style}>
          <Link to="/">Home</Link>
        </h3>
        <h3 style={style}>
          <Link to="/jokes">Jokes</Link>
        </h3>
        <h3 style={style}>
          <Link to="/musicaly">Musicaly</Link>
        </h3>
        <h3 style={style}>
          <Link to="/robots">Musicaly</Link>
        </h3>
      </div>
    );
  }
}

export default Header;
