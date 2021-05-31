import React, { Component } from "react";

export default class Notelist extends Component {
  render() {
    const { notelist } = this.props;

    if (notelist.length > 0) {
      return (
        <>
          {notelist.map((e) => (
            <button
              type="button"
              className="btn btn-secondary btn-block m-2 p-2"
            >
              <h2>{e.name}</h2>

              <div className="d-flex  justify-content-center">
                Contributor: {e.contributor}
              </div>
            </button>
          ))}
        </>
      );
    } else {
      return (
        <div>
          <h3 className="message text-secondary"> Please Select Semester </h3>{" "}
        </div>
      );
    }
  }
}
