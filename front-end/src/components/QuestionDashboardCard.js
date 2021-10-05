import React from 'react';
import Image from '../images/find.png';
import { Link, Router } from 'react-router-dom';

const QuestionDashboardCard = () => {
  return (
    <div
      className='card'
      style={{
        width: '15rem',
        padding: '10px',
        boxShadow: '10px 10px 5px black',
        marginLeft: '20px',
        backgroundColor: 'white',
      }}
    >
      <img
        className='card-img-top'
        src={Image}
        alt='Card image cap'
        style={{
          height: '50px',
          width: '50px',
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '20px',
        }}
      />
      <div className='card-body'>
        <h3 className='card-title'>Questions</h3>
        <p className='card-text'>100</p>

        <Link to='/questions' class='btn btn-primary'>
          See Questions
        </Link>
      </div>
    </div>
  );
};

export default QuestionDashboardCard;
