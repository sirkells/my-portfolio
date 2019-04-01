import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import Brain from "./brain.png";
const Logo = () => {
  return (
    <div className="ma4 mto center">
      <Tilt
        className="Tilt br1 shadow-2"
        options={{ max: 65 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner pa1">
          <img style={{ paddingTop: "3px" }} src={Brain} alt="logo" />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
