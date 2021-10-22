import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img from '../images/profile.png';
import ListGroup from 'react-bootstrap/ListGroup';

const UserCard = (props) => {
	return (
		<div
			style={{
				marginTop: '100px',
				width: '30%',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<Card
				style={{ flexDirection: 'row', padding: '20px', background: '#e2f2fa' }}
			>
				<img
					src={img}
					alt='Avatar'
					class='avatar'
					style={{
						verticalAlign: 'middle',

						width: '50px',
						height: '50px',
						borderRadius: '50%',
					}}
				/>
				<Card.Body>
					<Card.Title>
						<b>Zhalok Rahman</b>
					</Card.Title>
					<Card style={{ width: '18rem' }}>
						<ListGroup variant='flush'>
							<ListGroup.Item>2018-19</ListGroup.Item>
							<ListGroup.Item>01716922067</ListGroup.Item>
							<ListGroup.Item>zhalokrahman007@gmail.com</ListGroup.Item>
						</ListGroup>
					</Card>
					<div style={{ padding: '20px' }}>
						<Button variant='secondary' style={{ marginTop: '20px' }}>
							Github
						</Button>
						<Button
							variant='primary'
							style={{ marginTop: '20px', marginLeft: '20px' }}
						>
							Linkedin
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default UserCard;
