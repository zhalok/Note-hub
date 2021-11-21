import React from 'react';
import AnswerCard from './AnswerCard';

const AnswerList = ({ answerList, waitModalMessage, fetched }) => {
	if (fetched) {
		if (answerList.length > 0) {
			return (
				<>
					{answerList.map((e, index) => (
						<AnswerCard
							key={index}
							body={e.body}
							name={e.answer_providers_name}
							id={e.answer_providers_id}
						/>
					))}
				</>
			);
		} else {
			return (
				<div style={{ color: 'white', marginLeft: '400px' }}>
					No Answers Found
				</div>
			);
		}
	} else {
		return <div></div>;
	}
};

export default AnswerList;
