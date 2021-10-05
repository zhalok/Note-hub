import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Projectlist from '../components/Projectlist';
import Img from '../images/signup.jpg';

import '../App.css';

var sectionStyle = {
  backgroundImage: `url(${Img})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '10px',
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
        <div
          className='container mt-5 pt-4'
          style={{
            opacity: '0.5',
            marginTop: '10px',
            height: '100%',
            backgroundColor: 'white',
          }}
        >
          <h1 style={{ color: 'black' }}>Projects</h1>
          <hr className='hr-style' />
          <div className='total-page'>
            <div className='semester-options'>
              <h3 style={{ color: 'black' }}>Semester</h3>
              <hr className='hr-style' />
              <button
                type='button'
                id='1'
                onClick={this.controller}
                className='btn btn-outline-primary btn-lg btn-block'
                value='semester1'
              >
                Semester 1
              </button>
              <button
                type='button'
                id='2'
                onClick={this.controller}
                className='btn btn-outline-primary btn-lg btn-block'
                value=' semester2'
              >
                Semester 2
              </button>
              <button
                type='button'
                id='3'
                onClick={this.controller}
                className='btn btn-outline-primary btn-lg btn-block'
                value='semester3'
              >
                Semester 3
              </button>
              <button
                type='button'
                id='4'
                onClick={this.controller}
                className='btn btn-outline-primary btn-lg btn-block'
                value='semester4'
              >
                Semester 4
              </button>
              <button
                type='button'
                id='5'
                onClick={this.controller}
                className='btn btn-outline-primary btn-lg btn-block'
                value='semester5'
              >
                Semester 5
              </button>
              <button
                type='button'
                id='6'
                onClick={this.controller}
                className='btn btn-outline-primary btn-lg btn-block'
                value='semester6'
              >
                Semester 6
              </button>
              <button
                type='button'
                id='7'
                onClick={this.controller}
                className='btn btn-outline-primary btn-lg btn-block'
                value=' semester7'
              >
                Semester 7
              </button>
              <button
                type='button'
                id='8'
                onClick={this.controller}
                className='btn btn-outline-primary btn-lg btn-block'
                value=' semester8'
              >
                Semester 8
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
