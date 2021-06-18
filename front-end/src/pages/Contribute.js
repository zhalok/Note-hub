import React, { Component } from "react";

import ContributeForm from "../components/ContributeForm";
import ContributeCredential from "../components/ContributeCredential";
import Navbar from "../components/Navbar";

import Img from "../images/login.png";

import "../App.css";

var sectionStyle = {
  backgroundImage: `url(${Img})`,
};

export default class extends Component {
  render() {
    const { nav_info, loggedInState, handleLog, userId } = this.props;

    let contribute;
    if (loggedInState) {
      contribute = <ContributeForm userId={userId} />;
    } else {
      contribute = <ContributeCredential />;
    }

    return (
      <div style={sectionStyle} className="ht">
        <Navbar
          nav_link={nav_info}
          loggedInState={loggedInState}
          handleLog={handleLog}
          userId={userId}
        />

        <div className="container mt-5 pt-5">
          <h1 className="header text-secondary">Contribute</h1>
          <hr className="hr-style" />
          {contribute}
        </div>
      </div>
    );
  }
}
