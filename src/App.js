import React from "react";
import "./App.css";
import Nav from "./compnents/Nav/nav";
import Logo from "./compnents/Logo/logo";
import ProfileSearch from "./compnents/ProfileSearch/profile";
import { Commits } from "./compnents/Commits/Commits";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Logo />
      <Routes>
        <Route path="/" element={<ProfileSearch />} />
        <Route
          exact
          path="/repos/:repoOwnerName/:repositoryName/commits"
          element={<Commits />}
        />
      </Routes>
    </div>
  );
}

export default App;
