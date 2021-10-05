import Navbar from "../components/Navbar";
import Caro from "../components/Caro";

import "../App.css";

import Img from "../images/login.png";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import backgroundImage from "../images/signup.jpg";
import study from "../images/study.png";

var sectionStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  paddingTop: "80px",
  backgroundImage: `url(${backgroundImage})`,

  /* Full height */
  height: "100%",

  /* Center and scale the image nicely */
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default class Home extends Component {
  render() {
    const { nav_info, loggedInState, handleLog, userId } = this.props;

    return (
      <div style={sectionStyle} className="ht">
        <Navbar
          nav_link={nav_info}
          loggedInState={loggedInState}
          handleLog={handleLog}
          userId={userId}
        />
        <h1
          style={{
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            color: "white",
          }}
        >
          NoteHub
        </h1>
        <p
          style={{
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            color: "rgb(148, 159, 133)",
          }}
        >
          The only HUB you need
        </p>

        <div className="row">
          <div className="col-sm-2">
            <img
              className="container text-center"
              src={study}
              style={{
                width: "350px",
                height: "350px",
                marginBottom: "20px",
              }}
            />
          </div>
          <div className="col-sm-10">
            <Dashboard />
          </div>
        </div>

        <Caro />
        <div className="container text-center">
          <Link
            type="button"
            to="/contribute"
            className="btn btn-lg p-4 ml-3 mt-5 font-weight-bold"
            style={{
              backgroundColor: "#5fff03",
            }}
          >
            + Contribute
          </Link>
        </div>
      </div>
    );
  }
}
