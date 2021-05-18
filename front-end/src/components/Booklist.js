import React from "react";

export default class Booklist extends React.Component {
  render() {
    const { booklist } = this.props;
    if (booklist.length > 0) {
      return (
        <>
          {booklist.map((e) => (
            <button type="button" className="btn btn-primary m-2 p-2">
              <h2>{e.name}</h2>
              <div className="d-flex mt-2 justify-content-center">
                Author: {e.author}
              </div>
              <div className="d-flex  justify-content-center">
                Publisher: {e.publisher}
              </div>
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
          <h3 className="message"> Please Select Semester </h3>{" "}
        </div>
      );
    }
  }
}
