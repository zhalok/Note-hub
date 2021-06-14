import React, { Component } from "react";
import { Switch } from "react-router";
import Img from "../images/profile_dark.jpg";
import { Link } from "react-router-dom";

import ChoosefileBox from ".//ChoosefileBox";
import "../App.css";

var sectionStyle = {
  backgroundImage: `url(${Img})`,
};

export default class ContributeForm extends Component {
  state = {
    selected_type: "DataType",
    selected_sem: "Semester",
    your_name: "",
    registration: "",
    content_name: "",
    description: "",
    message: "",
    profile_path: "",
  };

  submit_information = async () => {
    const respornse = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.content_name,
        semester: this.state.selected_sem,
        type: this.state.selected_type,
        contributor_id: this.state.registration,
        contributor_name: this.state.your_name,
      }),
    });

    const data = respornse.json();
    console.log(data);
  };

  textchangehandler = (e) => {
    if (e.target.placeholder == "Your Name") {
      this.setState({
        your_name: e.target.value,
      });
    }

    if (e.target.placeholder == "Registration Number") {
      this.setState({
        registration: e.target.value,
      });
    }

    if (e.target.placeholder == "Content Name") {
      this.setState({
        content_name: e.target.value,
      });
    }

    if (e.target.id == "description") {
      this.setState({
        description: e.target.value,
      });
    }
  };

  changehandler = (e) => {
    if (e.target.id == "select_sem") {
      this.setState({
        selected_sem: e.target.value,
      });
    }
    if (e.target.id == "select_type") {
      this.setState({
        selected_type: e.target.value,
      });
    }
  };

  clickchangeHandler = (e) => {
    e.preventDefault();
    if (e.target.id == "submit") {
      const {
        your_name,
        registration,
        content_name,
        selected_sem,
        selected_type,
      } = this.state;

      if (
        your_name == "" ||
        registration == "" ||
        content_name == "" ||
        selected_sem == "Semester" ||
        selected_type == "Datatype"
      ) {
        alert("Please provide all information");
      } else {
      }
    }
  };

  render() {
    const { userId } = this.props;
    let path = "/profile/" + userId;
    console.log(path);
    return (
      <div className="row">
        <div className="col-lg-4">
          <div className="container p-3 m-5">
            <img src={Img} alt="profile_dark.jpg" className="img-sm" />
            <Link
              type="button"
              to={path}
              className="btn btn-outline-light btn-lg btn-block p-3"
            >
              See Your Profile
            </Link>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center ">
            <div className="center-box bg-transparent border border-light p-3 mt-5 shadow-lg rounded ">
              <h3 className="text-light">
                Please provide all the informations
              </h3>
              <hr className="bg-secondary" />
              <div>
                <div className="form-group">
                  <div className="d-flex flex-column p-2">
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Your Name"
                      value={this.state.your_name}
                      onChange={this.textchangehandler}
                    />{" "}
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Registration Number"
                      value={this.state.registration}
                      onChange={this.textchangehandler}
                    />
                  </div>
                  <div className="d-flex flex-column p-2">
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Content Name"
                      value={this.state.content_name}
                      onChange={this.textchangehandler}
                    />
                    <textarea
                      className="form-control mt-2"
                      placeholder="Description of the content(optional)"
                      id="description"
                      value={this.state.description}
                      onChange={this.textchangehandler}
                    />
                  </div>
                  <div className="d-flex flex-column p-2 ">
                    <div className="d-flex p-2">
                      <div className="d-flex">
                        <h5 className="text-light">Select Resource Type -</h5>
                        <select
                          className="form-select ml-3 "
                          value={this.state.selected}
                          onChange={this.changehandler}
                          id="select_type"
                        >
                          <option selected>Datatype</option>
                          <option>books</option>
                          <option>notes</option>
                          <option>questions</option>
                          <option>projects</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column p-2 ">
                    <div className="d-flex p-2">
                      <div className="d-flex">
                        <h5 className="text-light">Select Semester -</h5>
                        <select
                          className="form-select ml-3 "
                          value={this.state.selected_sem}
                          onChange={this.changehandler}
                          id="select_sem"
                        >
                          <option selected>Semester</option>
                          <option>semester1</option>
                          <option>semester2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column p-2 ">
                    <ChoosefileBox />
                  </div>
                  <div className="d-flex flex-column p-2 ml-5 mr-5">
                    <button
                      type="submit"
                      className="btn btn-outline-secondary btn-lg"
                      onClick={this.clickchangeHandler}
                      id="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
