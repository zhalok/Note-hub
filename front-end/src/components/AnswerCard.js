import React from 'react';
import Card from 'react-bootstrap/Card';

const AnswerCard = (props) => {
	const { body } = props;
	return (
		<div style={{ marginTop: '20px' }}>
			<Card>
				<Card.Body>
					<Card.Text>{body}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default AnswerCard;
