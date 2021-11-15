import React from 'react';
import DiscussionCard from './DiscussionCard';

const DiscussionList = (props) => {
	const { discussions, loggedInState, contributorName } = props;
	console.log(loggedInState);
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
};

export default DiscussionList;
