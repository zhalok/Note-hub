import React from "react";
import ContributeCredential from "../components/ContributeCredential";
import ContributeForm from "../components/ContributeForm";
import Navbar from "../components/Navbar";

export default class Contribute extends React.Component {
  render() {
    const { nav_info, loggedinstate } = this.props;

    if (loggedinstate === "false") {
      return (
        <div>
          <Navbar nav_links={nav_info} />

          <div className="container">
            <h1 className="header">Contribute</h1>
            <ContributeCredential />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar nav_links={nav_info} />

          <div className="container">
            <h1 className="header">Contribute</h1>
            <ContributeForm />
          </div>
        </div>
      );
    }
  }
}
