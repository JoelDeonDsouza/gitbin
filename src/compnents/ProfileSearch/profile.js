import React, { useState } from "react";
import "./profile.css";
import Users from "../Users/users";
import RepoTab from "../RepoTab/repoTab";

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
    console.log(reposRaw);
  };
  const { name, message } = data;
  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={onChangeHandler}
        className="searchbar"
        placeholder={"Search user name"}
      />
      <div className="bttn">
        <button className="btn-Text" type="submit" onClick={submitHandler}>
          <i className="bi-github" role="img" aria-label="GitHub"></i>
          Search
        </button>
      </div>
      {name && <Users data={data} repos={repos} />}
      <RepoTab repos={repos} />
      {message && <p className="error">{message}</p>}
    </div>
  );
};

export default ProfileSearch;
