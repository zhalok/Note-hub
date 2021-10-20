import React from 'react';
import img from '../images/dp.jpg';
import { width } from '../styles/ContentCardStyle';

const UserCard = (props) => {
	return (
		<div
			style={{
				marginTop: '100px',
				padding: '50px',
			}}
		>
			<div class='card' style={{ width: '18rem' }}>
				<img class='card-img-top' src={img} alt='Card image cap' />
				<div class='card-body'>
					<h5 class='card-title'>Zhalok Rahman</h5>
					<p class='card-text'>2018-19</p>
					<p class='card-text'>Contract: 01716922067</p>
					<p class='card-text'>Email: zhalokrahman007@gmail.com</p>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
