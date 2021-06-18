import React, { Component } from "react";

export default class Projectlist extends Component {
  render() {
    const { projectlist } = this.props;

    if (projectlist.length > 0) {
      return (
        <>
          {projectlist.map((e) => (
            <button
              type="button"
              className="btn btn-secondary btn-block m-2 p-2"
            >
              <h2>{e.name}</h2>

              <div className="d-flex mt-2 justify-content-center">
                Type: {e.type}
              </div>
              <div className="d-flex  justify-content-center">
                Team: {e.Team}
              </div>
            </button>
          ))}
        </>
      );
    } else {
      return (
        <div className="d-flex justify-content-center mt-5">
          <h3 className="text-light"> No Data Found</h3>{" "}
        </div>
      );
    }
  }
}
