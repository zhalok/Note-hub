import React from 'react';
import Image from '../images/flowchart.png';
import { Link, Router } from 'react-router-dom';

const ProjectDashboardCard = () => {
  return (
    <div
      className='card'
      style={{
        width: '18rem',

        padding: '30px',
        marginLeft: '20px',
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
        <h5 className='card-title'>Projects</h5>
        <p className='card-text'>100</p>

        <Link to='/projects' class='btn btn-primary'>
          See Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDashboardCard;
