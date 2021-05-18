import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../images/login.svg";
class Login extends React.Component {
  render() {
    const { nav_info } = this.props;

    return (
      <div>
        {/* navbar component */}
        <Navbar nav_links={nav_info} />
        <div className="container">
          <img src={logo} className="rounded float-right w-50" />
          <div className="d-flex justify-content-left p-5 w-50">
            <div className="d-flex flex-column ">
              <h2>Lets get started</h2>

              <input
                className="form-control mt-5 w-100"
                placeholder="Email"
                type="email"
              />

              <input
                className="form-control mt-2 w-100"
                placeholder="Password"
                type="password"
              />

              <Link type="button" className="btn btn-primary mt-5">
                Sign In
              </Link>

              <Link
                to="/signup"
                type="button"
                className="btn btn-outline-primary mt-2"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
