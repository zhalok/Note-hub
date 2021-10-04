import React from 'react';
import Image from '../images/books.png';
import { Link, Router } from 'react-router-dom';

const BookDashboardCard = () => {
  return (
    <div
      className='card'
      style={{
        width: '18rem',
        padding: '30px',
        boxShadow: '10px 10px 5px black',
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
        <h5 className='card-title'>Books</h5>
        <p className='card-text'>100</p>

        <Link to='/books' class='btn btn-primary'>
          See Books
        </Link>
      </div>
    </div>
  );
};

export default BookDashboardCard;
