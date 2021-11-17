import React from 'react';
import DiscussionCard from './DiscussionCard';

const DiscussionList = (props) => {
	const { discussions, loggedInState, contributorName } = props;

	if (discussions.length > 0) {
		return (
			<div>
				{discussions.map((e) => (
					<DiscussionCard
						discussion_info={e}
						loggedInState={loggedInState}
						contributorName={contributorName}
					/>
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
