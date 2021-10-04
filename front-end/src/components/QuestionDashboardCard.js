import React from 'react';
import Image from '../images/find.png';
import { Link, Router } from 'react-router-dom';

const QuestionDashboardCard = () => {
  return (
    <div
      className='card'
      style={{
        width: '18rem',
        padding: '30px',
        boxShadow: '10px 10px 5px black',
        marginLeft: '20px',
      }}
    >
      <img
        className='card-img-top'
        src={Image}
        alt='Card image cap'
        style={{
          height: '100px',
          width: '100px',
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <div className='card-body'>
        <h5 className='card-title'>Questions</h5>
        <p className='card-text'>100</p>

        <Link to='/questions' class='btn btn-primary'>
          See Questions
        </Link>
      </div>
    </div>
  );
};

export default QuestionDashboardCard;
