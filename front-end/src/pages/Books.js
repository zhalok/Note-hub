import React from "react";
import Navbar from "../components/Navbar";
import Booklist from "../components/Booklist";

export default class Books extends React.Component {
  state = {
    booklist: [],
  };

  controller = (e) => {
    if (e.target.type === "button") {
      if (e.target.id === "1") {
        this.setState({
          booklist: this.props.info.semester1,
        });
      } else if (e.target.id === "2") {
        this.setState({
          booklist: this.props.info.semester2,
        });
      }
    }
  };

  render() {
    const { nav_info } = this.props;
    const { booklist } = this.state;

    return (
      <div>
        <Navbar nav_links={nav_info} />

        <div className="container">
          <h1 className="header">Books</h1>
          <div className="total-page">
            <div className="semester-options">
              <h2 className="header">Semisters</h2>

              <button
                type="button"
                className="btn btn-outline-primary mt-2"
                id="1"
                onClick={this.controller}
              >
                Semester1
              </button>
              <button
                type="button"
                className="btn btn-outline-primary mt-2"
                id="2"
                onClick={this.controller}
              >
                Semester2
              </button>
            </div>
            <div className="contents">
              <Booklist booklist={booklist} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
