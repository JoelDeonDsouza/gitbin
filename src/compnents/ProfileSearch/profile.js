import React, { useState } from "react";
import "./profile.css";
import Users from "../Users/users";

const ProfileSearch = () => {
  const [data, setData] = useState({});
  const [userName, setUserName] = useState("");
  const [repos, setRepos] = useState([]);

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    //User Data
    const profile = await fetch(`https://api.github.com/users/${userName}`);
    const profileRaw = await profile.json();
    setData(profileRaw);

    //User Repo Data
    const repos = await fetch(profileRaw.repos_url);
    const reposRaw = await repos.json();
    setRepos(reposRaw);
  };
  const { name, message } = data;
  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={onChangeHandler}
        className="searchBar"
        placeholder={"Search user name"}
      />
      <div className="btn">
        <button className="btnText" type="submit" onClick={submitHandler}>
          <i className="bi-github" role="img" aria-label="GitHub"></i>
          Search
        </button>
      </div>
      {name && <Users data={data} repos={repos} />}
      {message && <p className="error">{message}</p>}
    </div>
  );
};

export default ProfileSearch;
