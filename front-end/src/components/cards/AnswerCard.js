import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const AnswerCard = (props) => {
	const { body, name, id, userId, answerId, setUpdate } = props;
	const [showOption, setShowOption] = useState('none');

	useEffect(() => {
		if (userId && userId == id) {
			setShowOption('block');
		}
	}, [userId]);
	const delete_answer = () => {
		fetch(`https://notehubapi.herokuapp.com/answers/${answerId}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUpdate({});
			})
			.catch((err) => console.log(err));
	};

	return (
		<div style={{ marginTop: '20px' }}>
			<Card
				style={{
					backgroundColor: 'white',
					// backgroundImage:
					// 'linear-gradient(130deg, rgba(49, 131, 181), rgba(110, 194, 245), rgba(65, 140, 186)',
				}}
			>
				<Card.Header>
					<h5>{name} </h5> - <small>{id}</small>
				</Card.Header>
				<Card.Body>
					<Card.Text>{body}</Card.Text>
					<Button
						style={{ display: showOption, marginLeft: 'auto' }}
						variant='dark'
						onClick={() => {
							delete_answer();
						}}
					>
						Delete
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default AnswerCard;
