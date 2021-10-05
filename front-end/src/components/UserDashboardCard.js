import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/profile.png';

const UserDashboardCard = (props) => {
  return (
    <div>
      <div
        className='card'
        style={{
          width: '15rem',
          padding: '10px',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '10px 10px 5px black',
          backgroundColor: 'rgb(150, 180, 166)',
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
          <h3 className='card-title'>Contributors</h3>
          <p className='card-text'>100</p>

          <Link
            to='/users'
            type='button'
            className='btn btn-primary btn-block '
            // style={{
            //   display: 'flex',

            //   textAlign: 'center',
            //   marginLeft: 'auto',
            //   marginRight: 'auto',
            // }}
          >
            Visit Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardCard;
