import React from 'react';
import Image from '../images/pencil.png';
import { Link } from 'react-router-dom';

const NoteDashboardCard = () => {
  return (
    <div
      className='card'
      style={{
        width: '15rem',
        padding: '10px',
        marginLeft: '20px',
        boxShadow: '10px 10px 5px black',
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
        <h3 className='card-title'>Notes</h3>
        <p className='card-text'>100</p>

        <Link to='/notes' class='btn btn-primary'>
          See Notes
        </Link>
      </div>
    </div>
  );
};

export default NoteDashboardCard;
