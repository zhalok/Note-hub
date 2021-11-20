import React from 'react';
import AnswerCard from './AnswerCard';

const AnswerList = ({ answerList, waitModalMessage, fetched }) => {
	// if (waitModalMessage == false) {
	// 	if (answerList.length > 0) {
	// 		return (
	// 			<>
	// 				{answerList.map((e, index) => (
	// 					<AnswerCard key={index} body={e.body} />
	// 				))}
	// 			</>
	// 		);
	// 	} else {
	// 		return (
	// 			<div
	// 				style={{
	// 					display: 'flex',
	// 					width: 'fit-content',
	// 					marginLeft: '400px',
	// 					marginTop: '100px',
	// 					color: 'white',
	// 				}}
	// 			>
	// 				<h1>No books found</h1>
	// 			</div>
	// 		);
	// 	}
	// } else {
	// 	return <div></div>;
	// }

	if (fetched) {
		if (answerList.length > 0) {
			return (
				<>
					{answerList.map((e, index) => (
						<AnswerCard key={index} body={e.body} />
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
