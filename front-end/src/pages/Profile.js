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
  render() {
    const { nav_info, loggedInState, handleLog, user } = this.props;

    let i;
    Data.map((item) => {
      if (item.email == user) {
        i = item.id - 1;
      }
    });

    let books = Data[i].contribution.books.map((item) => {
      return <li>{item}</li>;
    });

    let notes = Data[i].contribution.notes.map((item) => {
      return <li>{item}</li>;
    });

    let questions = Data[i].contribution.questions.map((item) => {
      return <li>{item}</li>;
    });

    let projects = Data[i].contribution.project.map((item) => {
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
              <p className="display-4 text-secondary pt-3">{Data[i].name}</p>
              <h3 className=" text-secondary">{Data[i].semester}</h3>
              <p className="display-5 text-secondary pt-4">{`Facebook id - ${Data[i].fb_id}`}</p>
              <p className="display-5 text-secondary">{`Contact Number - ${Data[i].phone}`}</p>
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
