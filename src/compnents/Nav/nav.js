import React from "react";
import "./navBar.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <img
        className="avatar"
        src="https://desktop.github.com/images/desktop-icon.svg"
        width="36.9"
        height="36.9"
        alt="ProfileImg"
      />
      <div className="textBox">
        <h5 className="text">GitBin</h5>
      </div>
    </nav>
  );
};

export default Nav;
