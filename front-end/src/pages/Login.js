import React, { useCallback, Component } from "react";
//import { FullScreen, useFullScreenHandle } from "react-full-screen";

import Navbar from "../components/Navbar";

import Img from "../images/login.png";
import Icon from "../images/icon.png";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";

var sectionStyle = {
  backgroundImage: `url(${Img})`,
};

export default class Login extends Component {
  render() {
    const { nav_info, loggedInState, handleLog } = this.props;
    //const handle = useFullScreenHandle();

    let Logged;
    if (loggedInState) {
      Logged = (
        <Link
          type="button"
          to="/contribute"
          className="btn btn-outline-light btn-block"
        >
          SignIn
        </Link>
      );
    } else {
      Logged = (
        <button className="btn btn-outline-light btn-block ">SignIn</button>
      );
    }

    return (
      <div
        style={sectionStyle}
        className="container-fluid d-flex justify-content-center mt-5 p-5 "
      >
        <Navbar
          nav_link={nav_info}
          loggedInState={loggedInState}
          handleLog={handleLog}
        />
        <div className="center-box p-3 border border-light mt-5 mb-5 w-25">
          <h3 className="pl-4 pb-3 display-5 text-light ">
            {" "}
            Let's get started...
          </h3>
          <hr className="bg-light " />
          <div className="center-box text-center mt-3 pt-3">
            <img
              src={Icon}
              alt="icon.png"
              height="150px"
              width="150px"
              className="rounded  "
            />
          </div>

          <div className="form-group m-3 pt-3 pb-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Password"
            />
          </div>
          <div className="center-box p-3">
            {Logged}
            <Link
              type="button"
              to="/signup"
              className="btn btn-outline-light btn-block"
            >
              SignUp
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
