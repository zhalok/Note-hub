import Navbar from "../components/Navbar";
import Caro from "../components/Caro";

import "../App.css";

import Img from "../images/login.png";

import React, { Component } from "react";
import { Link } from "react-router-dom";

var sectionStyle = {
  backgroundImage: `url(${Img})`,
};

export default class Home extends Component {
  render() {
    const { nav_info, loggedInState, handleLog } = this.props;

    return (
      <div style={sectionStyle} className="ht">
        <Navbar
          nav_link={nav_info}
          loggedInState={loggedInState}
          handleLog={handleLog}
        />
        <Caro />
        <div className="container text-center">
          <Link
            type="button"
            to="/books"
            className="btn btn-outline-secondary btn-lg m-5 p-4"
          >
            Brows Resources
          </Link>
          <Link
            type="button"
            to="/contribute"
            className="btn btn-outline-secondary btn-lg p-4"
          >
            Contribute
          </Link>
        </div>
      </div>
    );
  }
}
