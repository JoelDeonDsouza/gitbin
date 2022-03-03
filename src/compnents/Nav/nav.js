import React from "react";
import "./navBar.css";

const Nav = () => {
  return (
    <nav className="nav">
      <img
        className="avatarimg"
        src="https://desktop.github.com/images/desktop-icon.svg"
        width="36.9"
        height="36.9"
        alt="ProfileImg"
      />
      <div className="text-Box">
        <a href="/" className="text-1">
          GitBin
        </a>
      </div>
    </nav>
  );
};

export default Nav;
