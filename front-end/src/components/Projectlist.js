import React from "react";

export default class Projectlist extends React.Component {
  render() {
    const { projectlist } = this.props;
    if (projectlist.length > 0) {
      return (
        <>
          {projectlist.map((e) => (
            <button type="button" className="btn btn-primary m-2 p-2">
              <h2>{e.name}</h2>
              <div className="d-flex mt-2 justify-content-center">
                Project Type: {e.type}
              </div>

              <div className="d-flex  justify-content-center">
                Team: {e.Team}
              </div>
            </button>
          ))}
        </>
      );
    } else {
      return <h3 className="message">Please Select Semester</h3>;
    }
  }
}
