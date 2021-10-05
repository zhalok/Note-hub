import React from 'react';
import Image from '../images/books.png';
import { Link, Router } from 'react-router-dom';

const BookDashboardCard = () => {
  return (
    <div
      className='card'
      style={{
        width: '15rem',
        padding: '10px',
        boxShadow: '10px 10px 5px black',
        backgroundColor: 'white',
        marginLeft: '20px',
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
        <h3 className='card-title'>Books</h3>
        <p className='card-text'>100</p>

        <Link to='/books' class='btn btn-primary'>
          See Books
        </Link>
      </div>
    </div>
  );
};

export default BookDashboardCard;
