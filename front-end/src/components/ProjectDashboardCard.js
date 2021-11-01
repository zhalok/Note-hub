import React from 'react';
import Image from '../images/flowchart.png';
import { Link, Router } from 'react-router-dom';
import DashboardCardStyle from '../styles/DashboardCardStyle';

const ProjectDashboardCard = ({ projects }) => {
	return (
		<div className='card' style={DashboardCardStyle}>
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
				<p className='card-text'>{projects}</p>

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
