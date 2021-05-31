import React, { Component } from "react";

export default class ChoosefileBox extends Component {
  state = {
    text: "",
  };
  render() {
    const { text } = this.state;
    return (
      <div className="d-flex p-2">
        <input
          class="form-control"
          type="text"
          placeholder="Choose file"
          value={text}
        />
        <button className="btn btn-secondary ml-2" type="button" value="Browse">
          Browse
        </button>
      </div>
    );
  }
}
