import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Commits = () => {
  const [commitsData, setcommitsData] = useState();
  const { repoOwnerName, repositoryName } = useParams();

  useEffect(async () => {
    const commits = await fetch(
      `https://api.github.com/repos/${repoOwnerName}/${repositoryName}/commits`
    );
    const commitsRaw = await commits.json();
    setcommitsData(commitsRaw);
  }, []);

  //   console.log(commitsData, "commitsData");
  return (
    <div>
      <h1>Commits</h1>
      <div className="reposit">
        {commitsData?.map((data) => (
          <div className="repo">
            <div className="contain">
              <div>
                <div className="repo_title">
                  <a href="#">
                    <span>{data?.commit?.author?.name}</span>
                  </a>
                </div>
                <span className="repo_dis">{data?.commit?.message}</span>
              </div>
              <a href={data?.html_url} target="_blank">
                <div className="d-flex">
                  <div className="subitem">
                    <i className="fa fa-code pr-1" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
