import React from "react";
import "./users.css";

const Users = ({ data, repos }) => {
  return (
    <div style={{ backgroundColor: "#010409" }}>
      <div className="info">
        <img
          src={data.avatar_url}
          className="img-thumbnail avatar"
          width="150"
          height="150"
          alt="proImg"
        />
        <div className="info_userName">
          <h2>{data.name}</h2>
          <div className="user_infos">
            <div className="info_details">
              <i className="fa fa-map-marker pr-1" />
              <span>{data.location}</span>
            </div>
            <div className="info_details">
              <i className="fa fa-globe pr-1" />
              <a href={data.blog}>{data.blog}</a>
            </div>
            <div className="info_details">
              <i className="fa fa-globe pr-1" />
              <span>Total repositories {data.public_repos}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
