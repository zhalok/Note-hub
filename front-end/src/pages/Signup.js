import React, { Component } from "react";

import Navbar from "../components/Navbar";

import Img from "../images/login.png";
import Icon from "../images/icon.png";
import { Link } from "react-router-dom";

var sectionStyle = {
  backgroundImage: `url(${Img})`,
};

export default class SignUp extends Component {
  render() {
    const { nav_info, loggedInState, handleLog } = this.props;

    return (
      <div
        style={sectionStyle}
        className="container-fluid d-flex justify-content-center  p-3 "
      >
        <Navbar
          nav_link={nav_info}
          loggedInState={loggedInState}
          handleLog={handleLog}
        />
        <div className="center-box p-3 mt-5 mb-5 w-25">
          <p className="text-light">Provide all necessary information...</p>
          <form>
            <div className="form-group m-3 pt-3 pb-3">
              <label className="text-light">Email</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Email"
              />
              <small class="form-text text-muted pb-3">
                We'll never share your email with anyone else.
              </small>
              <label className="text-light">Password</label>
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Password"
              />
              <label className="text-light">Confirm password</label>
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Confirm password"
              />
              <label className="text-light">Fullname</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Fullname"
              />
              <label className="text-light">Registration Number</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Registration Number"
              />
              <label className="text-light">Contact Number</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Contact Number"
              />
            </div>
            <div className="center-box p-3">
              <button className="btn btn-outline-light ">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
