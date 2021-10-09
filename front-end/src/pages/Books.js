import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Booklist from '../components/Booklist';
import SearchOption from '../components/SearchOption';
import Img from '../images/signup.jpg';
import SemesterList from '../components/SemesterList';
import searchImage from '../images/search.png';

import '../App.css';

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
            <SearchOption />
          </div>

          <hr className='hr-style' />
          <div className='total-page'>
            <SemesterList controller={this.controller} />
            <div className='contents'>
              <Booklist booklist={booklist} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
