import React, { Component } from 'react';
import ContentCard from '../cards/ContentCard';
import BasicInfoContext from '../../Contexts/BasicInfoContext';

export default class Questionlist extends Component {
	render() {
		const { questionlist, questionFetched, questionImg, deleteQuestion } =
			this.props;
		if (questionFetched) {
			if (questionlist.length > 0) {
				return (
					<div style={{ padding: '20px' }}>
						{questionlist.map((e) => (
							<BasicInfoContext.Consumer>
								{({ userId, loggedInState }) => (
									<ContentCard
										info={e}
										userId={userId}
										loggedInState={loggedInState}
										contentImg={questionImg}
										deleteContent={(question_id) => {
											deleteQuestion(question_id);
										}}
									/>
								)}
							</BasicInfoContext.Consumer>
						))}
					</div>
				);
			} else {
				return (
					<div className='d-flex justify-content-center mt-5'>
						<h3 style={{ color: 'black' }}>No Data Found</h3>{' '}
					</div>
				);
			}
		} else {
			return (
				<div className='d-flex justify-content-center mt-5'>
					{/* <h3 style={{ color: 'black' }}>Loading</h3>{' '} */}
				</div>
			);
		}
	}
}
