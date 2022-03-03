import React from "react";
import "./repoTab.css";
import { useNavigate } from "react-router-dom";

const RepoTab = ({ repos, data }) => {
  const history = useNavigate();

  const cickToViewCommits = (orgName, repoName) => () => {
    history(`/repos/${orgName}/${repoName}/commits`);
  };
  return (
    <div className="container">
      <div className="reposit">
        {repos.map((repos) => (
          <div
            className="repo"
            onClick={cickToViewCommits(data.login, repos.name)}
          >
            <div className="contain">
              <div>
                <div className="repo_title">
                  <a href="#">
                    <span>{repos.name}</span>
                  </a>
                </div>
                <span className="repo_dis">{repos.description}</span>
              </div>
              <div className="d-flex">
                <div className="subitem">
                  <i className="fa fa-code pr-1" />
                  <span>{repos.language}</span>
                </div>
                <div className="subitem">
                  <i className="fa fa-star pr-1" />
                  <span>{repos.forks_count}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoTab;
