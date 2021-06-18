import React, { useCallback, Component } from "react";
//import { FullScreen, useFullScreenHandle } from "react-full-screen";

import Navbar from "../components/Navbar";

import Img from "../images/login.png";
import Icon from "../images/icon.png";
import { Link } from "react-router-dom";
import "../App.css";
import Profile from "../pages/Profile";
import ContributeForm from "../components/ContributeForm";

import Congratulations from "../components/Congratulations";

var sectionStyle = {
  backgroundImage: `url(${Img})`,
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registration_number: "",
      password: "",
      Alert_Message: "",
    };
  }

  user_authentication = async () => {
    const respornse = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registration_id: this.state.registration_number,
        password: this.state.password,
      }),
    });

    const user = await respornse.json();
    if (user == "User not found") {
      alert("You are not registered");
    } else {
      this.props.handleLog({ user: this.state.registration_number });
    }
  };

  changehandler = (e) => {
    if (e.target.placeholder == "Registration Number") {
      this.setState({
        registration_number: e.target.value,
      });
    } else if (e.target.placeholder == "Password") {
      this.setState({
        password: e.target.value,
      });
    }
  };

  clickHander = (e) => {
    e.preventDefault();
    if (this.state.registration_number == "" || this.state.password == "") {
      alert("Please Fullfill Thre Credentials");
    } else {
      this.user_authentication();
    }
  };

  render() {
    const { nav_info, loggedInState, handleLog, userId } = this.props;
    const { Alert_Message } = this.state;

    //const handle = useFullScreenHandle();

    let Logged;

    Logged = (
      <Link
        type="button"
        className="btn btn-outline-light btn-block"
        onClick={this.clickHander}
      >
        SignIn
      </Link>
    );

    if (loggedInState == true) {
      return (
        <div style={sectionStyle} className="ht">
          <div className="container-fluid d-flex justify-content-center mt-5 p-5 h-100">
            <Navbar
              nav_link={nav_info}
              loggedInState={loggedInState}
              handleLog={handleLog}
              userId={userId}
            />

            <div className="d-flex flex-column justify-content-center mt-5 h-100">
              <h3 className="pl-4 pb-3 mt-5 display-5 text-light ">
                You Are Logged In
              </h3>
              <Link
                type="button"
                to="/contribute"
                className="btn btn-outline-light btn-block"
              >
                Go To ContributeForm
              </Link>
            </div>
          </div>
        </div>
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
            <form>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Registration Number"
                value={this.state.registration_number}
                onChange={this.changehandler}
              />
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Password"
                value={this.state.password}
                onChange={this.changehandler}
              />
            </form>
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
