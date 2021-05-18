import React from "react";

export default class Questionlist extends React.Component {
  render() {
    const { questionlist } = this.props;
    if (questionlist.length > 0) {
      return (
        <>
          {questionlist.map((e) => (
            <button type="button" className="btn btn-primary m-2 p-2">
              <h2>{e.name}</h2>

              <div className="d-flex mt-2 justify-content-center">
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
