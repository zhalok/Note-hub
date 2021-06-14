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
    booklist: "SelectSem",
  };

  books_all = async () => {
    const response = await fetch("http://localhost:5000/books/get_all");
    const data = await response.json();
    this.setState({
      booklist: data,
    });
  };

  books_semester1 = async () => {
    const response = await fetch(
      "http://localhost:5000/books/semester/semester1"
    );

    const data = await response.json();

    this.setState({
      booklist: data,
    });
  };

  books_semester2 = async () => {
    const response = await fetch(
      "http://localhost:5000/books/semester/semester2"
    );
    const data = response.json();

    this.setState({
      booklist: data,
    });
  };

  // book3_semester3 = async () => {
  //   const response = await fetch(
  //     "http://localhost:5000/books/semester/semester3"
  //   );
  //   const data = response.json();
  //   this.setState({
  //     booklist: data,
  //   });
  // };

  controller = (e) => {
    if (e.target.type === "button") {
      if (e.target.id === "1") {
        this.books_semester1();
      } else if (e.target.id === "2") {
        this.books_semester2();
      }
    }
  };

  render() {
    const { nav_info, loggedInState, handleLog } = this.props;
    const { booklist } = this.state;
    // if (componentDidMount() == false) {
    //   this.books_all();
    // }
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
