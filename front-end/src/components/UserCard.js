import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img from '../images/dp.jpg';
import ListGroup from 'react-bootstrap/ListGroup';

const UserCard = (props) => {
	const { info } = props;
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				marginTop: '50px',
				width: '50%%',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<Card
				style={{
					flexDirection: 'row',
					padding: '20px',
					background: '#e2f2fa',
					boxShadow:
						'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

					backgroundColor: 'white',
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
						boxShadow:
							'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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
						<Button
							variant='secondary'
							style={{
								marginTop: '20px',
								boxShadow:
									'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
							}}
							onClick={() => {
								window.open(`${info.github}`, '_blank');
							}}
						>
							Github
						</Button>
						<Button
							variant='primary'
							style={{
								marginTop: '20px',
								marginLeft: '20px',
								boxShadow:
									'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
							}}
							onClick={() => {
								window.open(`${info.linkedin}`, '_blank');
							}}
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
