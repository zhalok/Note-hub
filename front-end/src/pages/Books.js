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

  find_all_books = async () => {
    const response = await fetch("http://localhost:5000/books/get_all/");
    const data = await response.json();
    console.log(data);
    this.setState({
      booklist: data,
    });
  };

  find_book_by_semester = async (semester) => {
    const response = await fetch(
      "http://localhost:5000/books/semester/" + semester
    );

    const data = await response.json();
    // console.log(data);

    this.setState({
      booklist: data,
    });
  };

  componentDidMount() {
    this.find_all_books();
  }

  controller = (e) => {
    this.find_book_by_semester(e.target.value);
  };

  render() {
    const { nav_info, loggedInState, handleLog, userId } = this.props;
    const { booklist } = this.state;
    console.log(loggedInState);
    console.log(userId);
    console.log(this.props.children);

    return (
      <div style={sectionStyle} className="ht">
        <Navbar
          nav_link={nav_info}
          loggedInState={loggedInState}
          handleLog={handleLog}
          userId={userId}
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
                value="semester1"
              >
                Semester 1
              </button>
              <button
                type="button"
                id="2"
                onClick={this.controller}
                className="btn btn-outline-secondary btn-lg btn-block"
                value=" semester2"
              >
                Semester 2
              </button>
              <button
                type="button"
                id="3"
                onClick={this.controller}
                className="btn btn-outline-secondary btn-lg btn-block"
                value="semester3"
              >
                Semester 3
              </button>
              <button
                type="button"
                id="4"
                onClick={this.controller}
                className="btn btn-outline-secondary btn-lg btn-block"
                value="semester4"
              >
                Semester 4
              </button>
              <button
                type="button"
                id="5"
                onClick={this.controller}
                className="btn btn-outline-secondary btn-lg btn-block"
                value="semester5"
              >
                Semester 5
              </button>
              <button
                type="button"
                id="6"
                onClick={this.controller}
                className="btn btn-outline-secondary btn-lg btn-block"
                value="semester6"
              >
                Semester 6
              </button>
              <button
                type="button"
                id="7"
                onClick={this.controller}
                className="btn btn-outline-secondary btn-lg btn-block"
                value=" semester7"
              >
                Semester 7
              </button>
              <button
                type="button"
                id="8"
                onClick={this.controller}
                className="btn btn-outline-secondary btn-lg btn-block"
                value=" semester8"
              >
                Semester 8
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
