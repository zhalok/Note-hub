import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img from '../images/dp.jpg';

const UserCard = (props) => {
	return (
		<div
			style={{
				marginTop: '100px',
				padding: '50px',

				marginRight: 'auto',
				width: 'fit-content',
			}}
		>
			<Card style={{ width: '18rem', borderRadius: '10px' }}>
				<Card.Img variant='top' src={img} style={{ borderRadius: '10px' }} />
				<Card.Body>
					<Card.Title>Zhalok Rahman</Card.Title>
					<Card.Text>2018-19</Card.Text>
					<Button variant='primary'>Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default UserCard;
