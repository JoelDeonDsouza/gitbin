import React from "react";
import "./repoTab.css";

const RepoTab = ({ repos }) => {
  return (
    <div className="container">
      <div className="reposit">
        {repos.map((repos) => (
          <div className="repo">
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
                <div className="subitem">
                  <i className="fa fa-code-fork pr-1" />
                  <span>0</span>
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
