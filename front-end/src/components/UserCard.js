import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img from '../images/profile.png';
import ListGroup from 'react-bootstrap/ListGroup';

const UserCard = (props) => {
	const { info } = props;
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				marginTop: '100px',
				width: '30%',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<Card
				style={{
					flexDirection: 'row',
					padding: '20px',
					background: '#e2f2fa',
				}}
			>
				<img
					src={img}
					alt='Avatar'
					class='avatar'
					style={{
						verticalAlign: 'middle',

						width: '60px',
						height: '60px',
						borderRadius: '50%',
					}}
				/>
				<Card.Body>
					<Card.Title>
						<b>{info.name}</b>
					</Card.Title>
					<Card style={{ width: '18rem' }}>
						<ListGroup variant='flush'>
							<ListGroup.Item>{info.session}</ListGroup.Item>
							<ListGroup.Item>{info.phone}</ListGroup.Item>
							<ListGroup.Item>{info.email}</ListGroup.Item>
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
