import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Notelist from '../components/Notelist';
import Img from '../images/signup.jpg';

import '../App.css';

var sectionStyle = {
  backgroundImage: `url(${Img})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '10px',
};

export default class Notes extends Component {
  state = {
    notelist: [],
  };

  find_all_notes = async () => {
    try {
      const response = await fetch('http://localhost:5000/notes/get_all/');
      const data = await response.json();
      console.log(data);
      this.setState({
        notelist: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  find_notes_by_semester = async (semester) => {
    try {
      const response = await fetch(
        'http://localhost:5000/notes/semester/' + semester
      );

      const data = await response.json();
      // console.log(data);

      if (data == 'No data has been found') {
        this.setState({
          notelist: [{ name: 'NoData' }],
        });
      } else {
        this.setState({
          notelist: data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  controller = (e) => {
    this.find_notes_by_semester(e.target.value);
  };

  componentDidMount() {
    this.find_all_notes();
  }

  render() {
    const { nav_info, loggedInState, handleLog, userId } = this.props;
    const { notelist } = this.state;

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
          <h1 style={{ color: 'black' }}>Notes</h1>
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
              <Notelist notelist={notelist} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
