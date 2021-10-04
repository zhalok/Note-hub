import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const { nav_link, loggedInState, handleLog, userId } = this.props;

    let navOption;

    let path = '/profile/' + userId;

    if (!loggedInState) {
      navOption = nav_link.map((e) => (
        <Link className='nav-link active' key={e.id} to={e.link}>
          {e.title}
        </Link>
      ));
    } else {
      navOption = (
        <>
          <Link className='nav-link active' to='/' onClick={handleLog}>
            Sign Out
          </Link>
          <Link className='nav-link active' to={path}>
            Profile
          </Link>
        </>
      );
    }

    return (
      <div>
        <nav className='navbar navbar-expand-sm bg-primary navbar-dark fixed-top'>
          <ul className='navbar-nav'>
            <Link className='nav-link nav-brand active' to='/'>
              NoteHub
            </Link>
          </ul>

          <ul className='navbar-nav ml-auto '>
            <li className='nav-item active'>
              <Link className='nav-link' to='/books'>
                Books
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/notes'>
                Notes
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link ' to='/questions'>
                Questions
              </Link>
            </li>

            <li className='nav-item active'>
              <Link className='nav-link ' to='/projects'>
                Projects
              </Link>
            </li>

            <li className='nav-item active'>
              <Link className='nav-link ' to='/contribute'>
                Contribute
              </Link>
            </li>
          </ul>

          <ul class='navbar-nav ml-auto'>{navOption}</ul>
        </nav>
      </div>
    );
  }
}
