import React, { Component } from "react";
import Navbar from "../components/Navbar";

import Img from "../images/login.png";
import Img1 from "../images/icon.png";

import "../App.css";

var sectionStyle = {
  backgroundImage: `url(${Img})`,
};

export default class Profile extends Component {
  render() {
    const { nav_info, loggedInState, handleLog } = this.props;

    return (
      <div style={sectionStyle} className="ht">
        <Navbar
          nav_link={nav_info}
          loggedInState={loggedInState}
          handleLog={handleLog}
        />
        <div className=" row">
          <div className="col-lg-4 mt-5 p-4">
            <div className="ml-5 p-3">
              <img
                src={Img1}
                alt="icon.png"
                height="250px"
                width="250px"
                className="ml-5"
              />
            </div>
            <div className="ml-5 p-3">
              <p className="display-4 text-secondary pt-3">Profile Name</p>
              <h3 className=" text-secondary">x'th year x'th semester</h3>
              <p className="display-5 text-secondary pt-4">{`Facebook Id - Id Name`}</p>
              <p className="display-5 text-secondary">{`Contact Number - 0123456789`}</p>
            </div>
          </div>
          <div className="col-lg-8 mt-5 p-4">
            <div className="container ">
              <h2 className="display-4 text-secondary pt-3">Contributions</h2>
              <hr className="hr-style" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
