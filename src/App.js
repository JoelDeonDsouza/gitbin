import React from "react";
import "./App.css";
import Nav from "./compnents/Nav/nav";
import Logo from "./compnents/Logo/logo";
import ProfileSearch from "./compnents/ProfileSearch/profile";

function App() {
  return (
    <div className="App">
      <Nav />
      <Logo />
      <ProfileSearch />
    </div>
  );
}

export default App;
