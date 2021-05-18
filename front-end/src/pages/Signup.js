import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../images/signup.png";
class Signup extends React.Component {
  render() {
    const { nav_info } = this.props;
    return (
      <div>
        <Navbar nav_links={nav_info} />
        <div className="container">
          <img src={logo} className="rounded float-right p-5 w-50" />
          <div class="d-flex  p-5 justify-content-left ">
            <div class="d-flex  flex-column ">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Confirm Password"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Full Name</label>
                  <input class="form-control" placeholder="Full-Name" />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Registration Number</label>
                  <input
                    class="form-control"
                    placeholder="Registration Number"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Contract Number</label>
                  <input class="form-control" placeholder="Contract Number" />
                </div>
                <Link
                  type="button"
                  to="/newUser"
                  className="btn btn-primary mt-2"
                >
                  Submit
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
