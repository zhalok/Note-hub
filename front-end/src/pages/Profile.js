import React, { Component } from "react";
import Navbar from "../components/Navbar";

import Data from "../ProfileData.json";

import Img from "../images/login.png";
import Img1 from "../images/icon.png";

import "../App.css";

var sectionStyle = {
  backgroundImage: `url(${Img})`,
};

export default class Profile extends Component {
  state = {
    userData: "",
    books: [],
    notes: [],
    questions: [],
    projects: [],
  };

  get_user_by_id = async (userId) => {
    const response = await fetch(`http://localhost:5000/users/id/${userId}`);
    const data = await response.json();
    const userData = {
      name: data.name,
      registration_id: data.registration_id,
      session: data.session,
    };
    const books = userData.books;
    const notes = userData.notes;
    const questions = userData.questions;
    const projects = userData.projects;
    this.setState({
      userData: userData,
      books: books,
      notes: notes,
      questions: questions,
      projects: projects,
    });

    this.get_user_by_id(this.props.match.params.id);
  };

  render() {
    const { nav_info, loggedInState, handleLog } = this.props;

    let { userData, books, notes, questions, projects } = this.state;

    books = books.map((item) => {
      return <li>{item}</li>;
    });

    notes = notes.map((item) => {
      return <li>{item}</li>;
    });

    questions = questions.map((item) => {
      return <li>{item}</li>;
    });

    projects = projects.map((item) => {
      return <li>{item}</li>;
    });

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
              <p className="display-4 text-secondary pt-3">{userData.name}</p>
              <h3 className=" text-secondary">{userData.session}</h3>
            </div>
          </div>
          <div className="col-lg-8 mt-5 p-4">
            <div className="container ">
              <h2 className="display-4 text-secondary pt-3">Contributions</h2>
              <hr className="hr-style" />
              <div>
                <div class="jumbotron p-3 bg-transparent border border-line-secondary">
                  <h3 className=" text-secondary">Books</h3>
                  <p className=" text-secondary">
                    <ul>{books}</ul>
                  </p>
                </div>
                <div class="jumbotron p-3 bg-transparent border border-line-secondary">
                  <h3 className=" text-secondary">Notes</h3>
                  <p className=" text-secondary">
                    <ul>{notes}</ul>
                  </p>
                </div>
                <div class="jumbotron p-3 bg-transparent border border-line-secondary">
                  <h3 className=" text-secondary">Questions</h3>
                  <p className=" text-secondary">
                    <ul>{questions}</ul>
                  </p>
                </div>
                <div class="jumbotron p-3 bg-transparent border border-line-secondary">
                  <h3 className=" text-secondary">Projects</h3>
                  <p className=" text-secondary">
                    <ul>{projects}</ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
