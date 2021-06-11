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
  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <div className="container p-3 m-5">
            <img src={Img} alt="profile_dark.jpg" className="img-sm" />
            <Link
              type="button"
              to="/profile"
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
              <form>
                <div className="form-group">
                  <div className="d-flex flex-column p-2">
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Your Name"
                    />{" "}
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Registration Number"
                    />
                  </div>
                  <div className="d-flex flex-column p-2">
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Content Name"
                    />
                    <textarea
                      className="form-control mt-2"
                      placeholder="Description of the content(optional)"
                    />
                  </div>
                  <div className="d-flex flex-column p-2 ">
                    <div className="d-flex p-2">
                      <div className="d-flex">
                        <h5 className="text-light">Select Resource Type -</h5>
                        <select className="form-select ml-3 ">
                          <option selected>Datatype</option>
                          <option>Books</option>
                          <option>Notes</option>
                          <option>Questions</option>
                          <option>Projects</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column p-2 ">
                    <div className="d-flex p-2">
                      <div className="d-flex">
                        <h5 className="text-light">Select Semester -</h5>
                        <select className="form-select ml-3 ">
                          <option selected>Semester</option>
                          <option>Semester1</option>
                          <option>Semester2</option>
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
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
