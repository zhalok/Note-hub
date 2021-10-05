import React from "react";
import Image from "../images/pencil.png";
import { Link } from "react-router-dom";

const NoteDashboardCard = () => {
  return (
    <div
      className="card"
      style={{
        width: "15rem",
        padding: "10px",
        marginLeft: "20px",
        boxShadow: "10px 10px 5px black",
        backgroundColor: "#429ffc",
      }}
    >
      <img
        className="card-img-top"
        src={Image}
        alt="Card image cap"
        style={{
          height: "50px",
          width: "50px",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">Notes</h5>
        <p className="card-text">100</p>

        <Link to="/notes" class="btn btn-success">
          See Notes
        </Link>
      </div>
    </div>
  );
};

export default NoteDashboardCard;
