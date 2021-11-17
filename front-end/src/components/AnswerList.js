import React from 'react';
import AnswerCard from './AnswerCard';

const AnswerList = ({ answerList }) => {
	return (
		<>
			{answerList.map((e, index) => (
				<AnswerCard key={index} body={e.body} />
			))}
		</>
	);
};

export default AnswerList;
