import React from 'react';
import BasicInfoContext from '../../Contexts/BasicInfoContext';
import AnswerCard from '../cards/AnswerCard';

const AnswerList = ({
	answerList,
	waitModalMessage,
	fetched,
	userId,
	loggedInState,
	setShowWaitMessage,
	setUpdate,
}) => {
	if (fetched) {
		if (answerList.length > 0) {
			return (
				<>
					{answerList.map((e, index) => (
						<BasicInfoContext.Consumer>
							{({ userId }) => (
								<AnswerCard
									answerId={e._id}
									key={index}
									body={e.body}
									name={e.answer_providers_name}
									id={e.answer_providers_id}
									userId={userId}
									setShowWaitMessage={setShowWaitMessage}
									setUpdate={setUpdate}
								/>
							)}
						</BasicInfoContext.Consumer>
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
