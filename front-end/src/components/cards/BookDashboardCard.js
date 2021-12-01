import React from 'react';
import Image from '../images/books.png';
import { Link, Router } from 'react-router-dom';
import DashboardStyle from '../styles/DashboardStyle';
const DashboardCardStyle = require('../../styles/DashboardCardStyle');
const DashboardCardImageStyle = require('../../styles/DashboardCardImageStyle');

const BookDashboardCard = ({ books }) => {
	return (
		<div className='card' style={DashboardCardStyle}>
			<img
				className='card-img-top'
				src={Image}
				alt='Card image cap'
				style={DashboardCardImageStyle}
			/>
			<div className='card-body'>
				<h3 className='card-title'>Books</h3>
				<p className='card-text'>{books}</p>

				<Link
					to='/books'
					class='btn btn-primary'
					style={{
						boxShadow:
							'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
					}}
				>
					See Books
				</Link>
			</div>
		</div>
	);
};

export default BookDashboardCard;
