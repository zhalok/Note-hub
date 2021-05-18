import React from "react";
import Navbar from "../components/Navbar";
import logo from "../images/welcome.jpg";
import { Link } from "react-router-dom";

class Welcome extends React.Component {
  render() {
    const { nav_info } = this.props;
    return (
      <div>
        <Navbar nav_links={nav_info} />

        <img src={logo} className="rounded mx-auto d-block" />
        <h1 className="text-center">to Notehub</h1>
        <div className="d-flex justify-content-center ">
          <Link
            type="button"
            to="/books"
            className="btn btn-outline-primary mt-5 p-4"
          >
            Browse Resources
          </Link>
          <Link
            type="button"
            to="/contribute"
            className="btn btn-primary mt-5 ml-2 p-4"
            value="Contribute"
          >
            Contribute
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
