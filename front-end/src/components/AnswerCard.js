import React from 'react';
import Card from 'react-bootstrap/Card';

const AnswerCard = (props) => {
	const { body, name, id } = props;
	return (
		<div style={{ marginTop: '20px' }}>
			<Card>
				<Card.Header>
					<h5>{name} </h5> - <small>{id}</small>
				</Card.Header>
				<Card.Body>
					<Card.Text>{body}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default AnswerCard;
