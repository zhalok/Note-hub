import React from 'react';
import BasicInfoContext from '../../Contexts/BasicInfoContext';
import DiscussionCard from '../cards/DiscussionCard';

const DiscussionList = (props) => {
	const { discussions, userName, changer, deleteDiscussion } = props;

	if (discussions.length > 0) {
		return (
			<div>
				{discussions.map((e) => (
					<BasicInfoContext.Consumer>
						{({ userId, loggedInState }) => (
							<DiscussionCard
								discussion_info={e}
								loggedInState={loggedInState}
								userName={userName}
								userId={userId}
								deleteDiscussion={deleteDiscussion}
							/>
						)}
					</BasicInfoContext.Consumer>
				))}
			</div>
		);
	} else {
		return (
			<div>
				<div className='d-flex justify-content-center mt-5'>
					<h3 style={{ color: 'black' }}>No Data Found</h3>{' '}
				</div>
			</div>
		);
	}
};

export default DiscussionList;
