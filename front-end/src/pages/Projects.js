import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Projectlist from '../components/Projectlist';
import Img from '../images/login.png';

import '../App.css';

var sectionStyle = {
  backgroundImage: `url(${Img})`,
};

export default class Projects extends Component {
  state = {
    projectlist: [],
  };

  find_all_projects = async () => {
    try {
      const response = await fetch('http://localhost:5000/projects/get_all/');
      const data = await response.json();

      this.setState({
        projectlist: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  find_projects_by_semester = async (semester) => {
    try {
      const response = await fetch(
        'http://localhost:5000/projects/semester/' + semester
      );

      const data = await response.json();

      this.setState({
        projectlist: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  controller = (e) => {
    this.find_projects_by_semester(e.target.value);
  };

  componentDidMount() {
    this.find_all_projects();
  }

  render() {
    const { nav_info, loggedInState, handleLog, userId } = this.props;
    const { projectlist } = this.state;

    return (
      <div style={sectionStyle} className='ht'>
        <Navbar
          nav_link={nav_info}
          loggedInState={loggedInState}
          handleLog={handleLog}
          userId={userId}
        />
        <div className='container mt-5 pt-4'>
          <h1 className='display-3 text-light'>Projects</h1>
          <hr className='hr-style' />
          <div className='total-page'>
            <div className='semester-options'>
              <h3 className='display-6 text-secondary'>Semester</h3>
              <hr className='hr-style' />
              <button
                type='button'
                id='1'
                onClick={this.controller}
                className='btn btn-outline-secondary btn-lg btn-block'
                value='semester1'
              >
                Semester1
              </button>
              <button
                type='button'
                id='2'
                onClick={this.controller}
                className='btn btn-outline-secondary btn-lg btn-block'
                value='semester2'
              >
                Semester2
              </button>
              <button
                type='button'
                id='3'
                onClick={this.controller}
                className='btn btn-outline-secondary btn-lg btn-block'
                value='semester3'
              >
                Semester3
              </button>
              <button
                type='button'
                id='4'
                onClick={this.controller}
                className='btn btn-outline-secondary btn-lg btn-block'
                value='semester4'
              >
                Semester4
              </button>
              <button
                type='button'
                id='5'
                onClick={this.controller}
                className='btn btn-outline-secondary btn-lg btn-block'
                value='semester5'
              >
                Semester5
              </button>
              <button
                type='button'
                id='6'
                onClick={this.controller}
                className='btn btn-outline-secondary btn-lg btn-block'
                value='semester6'
              >
                Semester6
              </button>
              <button
                type='button'
                id='7'
                onClick={this.controller}
                className='btn btn-outline-secondary btn-lg btn-block'
                value='semester7'
              >
                Semester7
              </button>
              <button
                type='button'
                id='8'
                onClick={this.controller}
                className='btn btn-outline-secondary btn-lg btn-block'
                value='semester8'
              >
                Semester8
              </button>
            </div>
            <div className='contents'>
              <Projectlist projectlist={projectlist} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
