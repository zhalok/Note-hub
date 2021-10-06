import React from 'react';
import Navbar from '../components/Navbar';

export default class Users extends React.Component {
  render() {
    const { nav_info } = this.props;
    return (
      <div>
        <Navbar nav_link={nav_info} />
      </div>
    );
  }
}
