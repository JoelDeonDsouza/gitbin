import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
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
    console.log(profileRaw);

    //User Repo Data
    const repos = await fetch(profileRaw.repos_url);
    const reposRaw = await repos.json();
    console.log(reposRaw);
  };
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
          Search
        </button>
      </div>
    </div>
  );
};

export default Profile;
