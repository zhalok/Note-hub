import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Booklist from "../components/Booklist";
import Img from "../images/login.png";

import "../App.css";

var sectionStyle = {
  backgroundImage: `url(${Img})`,
};

export default class Books extends Component {
  state = {
    booklist: [],
  };

  book_semester1 = async () => {
    const response = await fetch(
      "http://localhost:5000/books/semester/semester1"
    );

    const data = await response.json();
    console.log(data);

    if (data == "No data has been found") {
      this.setState({
        booklist: [{ name: "NoData" }],
      });
    } else {
      this.setState({
        booklist: data,
      });
    }
  };

  book_semester2 = async () => {};

  controller = (e) => {
    if (e.target.type === "button") {
      if (e.target.id === "1") {
        this.book_semester1();
      } else if (e.target.id === "2") {
        this.setState({
          booklist: this.props.info.semester2,
        });
      }
    }
  };

  render() {
    const { nav_info, loggedInState, handleLog } = this.props;
    const { booklist } = this.state;

    return (
      <div style={sectionStyle} className="ht">
        <Navbar
          nav_link={nav_info}
          loggedInState={loggedInState}
          handleLog={handleLog}
        />
        <div className="container mt-5 pt-4">
          <h1 className="display-3 text-light">Books</h1>
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
              <Booklist booklist={booklist} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
