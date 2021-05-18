import React from "react";
import { Link } from "react-router-dom";

export default class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.datatype,
    };
  }

  render() {
    const { select_items } = this.props;
    const { text } = this.state;
    return (
      <div className="d-flex p-2">
        <div className="d-flex  ">
          <h5>Select {text}</h5>
          <select
            className="form-select ml-3 "
            aria-label="Default select example"
          >
            <option selected>{text}</option>
            {select_items.map((e) => (
              <option value={e.name}>{e.name}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
