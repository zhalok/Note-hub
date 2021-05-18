import React from "react";
import ChoosefileBox from "./ChoosefileBox";
import DropdownMenu from "./DropdownMenu";

export default class ContributeForm extends React.Component {
  render() {
    const datatype = "Data Type";
    const data = [
      { id: 1, name: "Books" },
      { id: 2, name: "Questions" },
      { id: 2, name: "Notes" },
      { id: 2, name: "Projects" },
    ];

    const semester = "Semester";
    const semester_data = [
      { id: 1, name: "Semester1" },
      { id: 2, name: "Semester2" },
    ];

    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="center-box">
            <h3>Please provide all the informations</h3>
            <form>
              <div className="form-group">
                <div className="d-flex flex-column p-2">
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Your Name"
                  />
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Registration Number"
                  />
                </div>

                <div className="d-flex flex-column p-2 ">
                  <DropdownMenu datatype={datatype} select_items={data} />
                  <DropdownMenu
                    datatype={semester}
                    select_items={semester_data}
                  />
                </div>

                <ChoosefileBox />

                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-success mt-3 w-50"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
