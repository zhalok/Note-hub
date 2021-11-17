import React from 'react';
import Card from 'react-bootstrap/Card';

const AnswerCard = (props) => {
	const { body } = props;
	return (
		<Card>
			<Card.Body>
				<Card.Text>{body}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default AnswerCard;
