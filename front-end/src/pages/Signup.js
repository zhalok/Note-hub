import React, { Component } from "react";

import Navbar from "../components/Navbar";

import Img from "../images/login.png";
import Icon from "../images/icon.png";
import { Link } from "react-router-dom";

var sectionStyle = {
  backgroundImage: `url(${Img})`,
};

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    confirm_password: "",
    fullname: "",
    registration_number: "",
    contract_number: "",
    session: "",
    message: "",
  };

  signup_request_handler = async (e) => {
    const respornse = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.fullname.trim(),
        registration_id: this.state.registration_number.trim(),
        session: this.state.session.trim(),
        password: this.state.password.trim(),
      }),
    });
    const data = await respornse.json();
    if (data == "User Already Registered") {
      this.setState({
        message: data,
      });
    } else {
      this.setState({
        message: "Congratulations Registration Complete",
      });
    }
  };

  click_handler = (e) => {
    e.preventDefault();
    const {
      email,
      password,
      confirm_password,
      fullname,
      session,
      registration_number,
      contract_number,
    } = this.state;
    if (e.target.id == "submit") {
      if (
        email == "" ||
        password == "" ||
        confirm_password == "" ||
        fullname == "" ||
        session == "" ||
        registration_number == "" ||
        contract_number == ""
      ) {
        alert("Please Fullfill All The Fields");
      } else if (password != confirm_password) {
        alert("Password and Confirm password didnt match");
      } else {
        this.signup_request_handler(e);
      }
    }
  };

  change_handler = (e) => {
    if (e.target.placeholder == "Email") {
      this.setState({
        email: e.target.value,
      });
    } else if (e.target.placeholder == "Password") {
      this.setState({
        password: e.target.value,
      });
    } else if (e.target.placeholder == "Confirm Password") {
      this.setState({
        confirm_password: e.target.value,
      });
    } else if (e.target.placeholder == "Fullname") {
      this.setState({
        fullname: e.target.value,
      });
    } else if (e.target.placeholder == "Registration Number") {
      this.setState({
        registration_number: e.target.value.trim(),
      });
    } else if (e.target.placeholder == "Contact Number") {
      this.setState({
        contract_number: e.target.value,
      });
    } else if (e.target.placeholder == "Session") {
      this.setState({
        session: e.target.value,
      });
    }
  };

  render() {
    const { nav_info, loggedInState, handleLog, userId } = this.props;
    const {
      email,
      password,
      confirm_password,
      fullname,
      registration_number,
      contract_number,
      session,
    } = this.state;

    return (
      <div
        style={sectionStyle}
        className="container-fluid d-flex justify-content-center  p-3 "
      >
        <Navbar
          nav_link={nav_info}
          loggedInState={loggedInState}
          handleLog={handleLog}
          userId={userId}
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
                value={email}
                onChange={this.change_handler}
              />
              <small class="form-text text-muted pb-3">
                We'll never share your email with anyone else.
              </small>
              <label className="text-light">Password</label>
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Password"
                onChange={this.change_handler}
                value={password}
              />
              <label className="text-light">Confirm password</label>
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Confirm Password"
                onChange={this.change_handler}
                value={confirm_password}
              />
              <label className="text-light">Fullname</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Fullname"
                onChange={this.change_handler}
                value={fullname}
              />
              <label className="text-light">Registration Number</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Registration Number"
                onChange={this.change_handler}
                value={registration_number}
              />
              <label className="text-light">Contact Number</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Contact Number"
                onChange={this.change_handler}
                value={contract_number}
              />
              <label className="text-light">Session</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Session"
                onChange={this.change_handler}
                value={session}
              />
            </div>
            <div className="center-box p-3">
              <button
                className="btn btn-outline-light"
                id="submit"
                onClick={this.click_handler}
              >
                Submit
              </button>
            </div>
            <p className="text-light">{this.state.message}</p>
          </form>
        </div>
      </div>
    );
  }
}
