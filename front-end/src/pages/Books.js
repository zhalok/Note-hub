import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Booklist from '../components/Booklist';
import Img from '../images/signup.jpg';

import '../App.css';
import { marginTop } from '../styles/ContentCardStyle';

var sectionStyle = {
  backgroundImage: `url(${Img})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '10px',
};

export default class Books extends Component {
  state = {
    booklist: [],
  };

  find_all_books = async () => {
    try {
      const response = await fetch('http://localhost:5000/books/get_all/');
      const data = await response.json();
      console.log(data);
      this.setState({
        booklist: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  find_book_by_semester = async (semester) => {
    try {
      const response = await fetch(
        'http://localhost:5000/books/semester/' + semester
      );

      const data = await response.json();
      // console.log(data);

      this.setState({
        booklist: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.find_all_books();
  }

  controller = (e) => {
    this.find_book_by_semester(e.target.value);
  };

  render() {
    const { nav_info, loggedInState, handleLog, userId } = this.props;
    const { booklist } = this.state;
    console.log(loggedInState);
    console.log(userId);
    console.log(this.props.children);

    return (
      <div style={sectionStyle} className='ht'>
        <Navbar
          nav_link={nav_info}
          loggedInState={loggedInState}
          handleLog={handleLog}
          userId={userId}
        />

        <div className='container mt-5 pt-4'>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h1 style={{ color: 'white' }}>Books</h1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: 'auto',
                height: 'fit-content',
              }}
            >
              <input
                type='search'
                className='form-control'
                style={{ marginTop: '10px', marginRight: '10px' }}
              />
              <button
                type='button'
                className='btn btn-success'
                style={{ marginTop: '10px', height: '100%' }}
              >
                Search
              </button>
            </div>
          </div>

          <hr className='hr-style' />
          <div className='total-page'>
            <div className='semester-options'>
              <h3 style={{ color: 'white' }}>Semesters</h3>
              <hr className='hr-style' />
              <button
                type='button'
                id='1'
                onClick={this.controller}
                className='btn btn-outline-success btn-lg btn-block'
                value='semester1'
                style={{ color: 'white' }}
              >
                Semester 1
              </button>
              <button
                type='button'
                id='2'
                onClick={this.controller}
                className='btn btn-outline-success btn-lg btn-block'
                value=' semester2'
                style={{ color: 'white' }}
              >
                Semester 2
              </button>
              <button
                type='button'
                id='3'
                onClick={this.controller}
                className='btn btn-outline-success btn-lg btn-block'
                value='semester3'
                style={{ color: 'white' }}
              >
                Semester 3
              </button>
              <button
                type='button'
                id='4'
                onClick={this.controller}
                className='btn btn-outline-success btn-lg btn-block'
                value='semester4'
                style={{ color: 'white' }}
              >
                Semester 4
              </button>
              <button
                type='button'
                id='5'
                onClick={this.controller}
                className='btn btn-outline-success btn-lg btn-block'
                value='semester5'
                style={{ color: 'white' }}
              >
                Semester 5
              </button>
              <button
                type='button'
                id='6'
                onClick={this.controller}
                className='btn btn-outline-success btn-lg btn-block'
                value='semester6'
                style={{ color: 'white' }}
              >
                Semester 6
              </button>
              <button
                type='button'
                id='7'
                onClick={this.controller}
                className='btn btn-outline-success btn-lg btn-block'
                value=' semester7'
                style={{ color: 'white' }}
              >
                Semester 7
              </button>
              <button
                type='button'
                id='8'
                onClick={this.controller}
                className='btn btn-outline-success btn-lg btn-block'
                value=' semester8'
                style={{ color: 'white' }}
              >
                Semester 8
              </button>
            </div>
            <div className='contents'>
              <Booklist booklist={booklist} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
