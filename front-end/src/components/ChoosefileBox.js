import React from "react";
export default class ChoosefileBox extends React.Component {
  state = {
    text: "",
  };
  render() {
    const { text } = this.state;
    return (
      <div className="d-flex p-2">
        <input
          className="form-control"
          type="text"
          placeholder="Choose file"
          value={text}
        />
        <button className="btn btn-primary ml-2" type="button" value="Browse">
          Browse
        </button>
      </div>
    );
  }
}
