import React from 'react';
import Image from '../images/find.png';
import { Link, Router } from 'react-router-dom';
import DashboardCardStyle from '../../styles/DashboardCardStyle';

const QuestionDashboardCard = ({ questions }) => {
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
				<h3 className='card-title'>Questions</h3>
				<p className='card-text'>{questions}</p>

				<Link
					to='/questions'
					class='btn btn-primary'
					style={{
						boxShadow:
							'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
					}}
				>
					See Questions
				</Link>
			</div>
		</div>
	);
};

export default QuestionDashboardCard;
