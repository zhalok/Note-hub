import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    const { nav_links } = this.props;
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="nav-link nav-brand">
            Note_hub
          </Link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <Link className="nav-link" to="/books">
                Books
              </Link>
              <Link to="/notes" className="nav-link">
                Notes
              </Link>
              <Link className="nav-link" to="/questions">
                Questions
              </Link>

              <Link className="nav-link" to="/projects">
                Projects
              </Link>

              <Link className="nav-link" to="/contribute">
                Contribute
              </Link>
            </ul>

            <ul class="navbar-nav ml-auto">
              {nav_links.map((e) => (
                <Link className="nav-link" key={e.id} to={e.link}>
                  {e.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
