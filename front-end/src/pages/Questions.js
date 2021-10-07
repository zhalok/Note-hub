import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Questionlist from '../components/Questionlist';
import Img from '../images/signup.jpg';
import SemesterList from '../components/SemesterList';
import SearchOption from '../components/SearchOption';

import '../App.css';

var sectionStyle = {
  backgroundImage: `url(${Img})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '10px',
};

export default class Questions extends Component {
  state = {
    questionlist: [],
  };

  find_all_questions = async () => {
    try {
      const response = await fetch('http://localhost:5000/questions/get_all/');
      const data = await response.json();

      this.setState({
        questionlist: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  find_questions_by_semester = async (semester) => {
    try {
      const response = await fetch(
        'http://localhost:5000/questions/semester/' + semester
      );

      const data = await response.json();

      this.setState({
        questionlist: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  controller = (e) => {
    this.find_questions_by_semester(e.target.value);
  };

  componentDidMount() {
    this.find_all_questions();
  }

  render() {
    const { nav_info, loggedInState, handleLog, userId } = this.props;
    const { questionlist } = this.state;

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
            <h1 style={{ color: 'white' }}>Questions</h1>
            <SearchOption />
          </div>
          <hr className='hr-style' />
          <div className='total-page'>
            <SemesterList controller={this.controller} />
            <div className='contents'>
              <Questionlist questionlist={questionlist} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
