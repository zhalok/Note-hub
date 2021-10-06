import React from 'react';
import Image from '../images/flowchart.png';
import { Link, Router } from 'react-router-dom';

const ProjectDashboardCard = () => {
  return (
    <div
      className='card'
      style={{
        width: '15rem',
        backgroundColor: 'white',
        padding: '10px',
        marginLeft: '20px',
        boxShadow: '5px 5px 5px black',
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
        <h3 className='card-title'>Projects</h3>
        <p className='card-text'>100</p>

        <Link
          to='/projects'
          class='btn btn-primary'
          style={{
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
        >
          See Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDashboardCard;
