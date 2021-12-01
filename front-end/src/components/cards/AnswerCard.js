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
			<Card>
				<Card.Header>
					<h5>{name} </h5> - <small>{id}</small>
				</Card.Header>
				<Card.Body>
					<Card.Text>{body}</Card.Text>
					<Button
						style={{ display: showOption, marginLeft: 'auto' }}
						variant='danger'
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
