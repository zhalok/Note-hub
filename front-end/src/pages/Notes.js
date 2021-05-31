import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Notelist from "../components/Notelist";
import Img from "../images/login.png";

import "../App.css";

var sectionStyle = {
  backgroundImage: `url(${Img})`,
};

export default class Notes extends Component {
  state = {
    notelist: [],
  };

  controller = (e) => {
    if (e.target.type === "button") {
      if (e.target.id === "1") {
        this.setState({
          notelist: this.props.info.semester1,
        });
      } else if (e.target.id === "2") {
        this.setState({
          notelist: this.props.info.semester2,
        });
      }
    }
  };

  render() {
    const { nav_info, loggedInState, handleLog } = this.props;
    const { notelist } = this.state;

    return (
      <div style={sectionStyle} className="ht">
        <Navbar
          nav_link={nav_info}
          loggedInState={loggedInState}
          handleLog={handleLog}
        />
        <div className="container mt-5 pt-4">
          <h1 className="display-3 text-light">Notes</h1>
          <hr className="hr-style" />
          <div className="total-page">
            <div className="semester-options">
              <h3 className="display-6 text-secondary">Semester</h3>
              <hr className="hr-style" />
              <button
                type="button"
                id="1"
                onClick={this.controller}
                className="btn btn-outline-secondary btn-lg btn-block"
              >
                Semester1
              </button>
              <button
                type="button"
                id="2"
                onClick={this.controller}
                className="btn btn-outline-secondary btn-lg btn-block"
              >
                Semester2
              </button>
            </div>
            <div className="contents">
              <Notelist notelist={notelist} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
