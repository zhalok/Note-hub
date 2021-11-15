import React from 'react';
import DiscussionCard from './DiscussionCard';

const DiscussionList = (props) => {
	const { discussions, loggedInState } = props;
	console.log(loggedInState);
	return (
		<div>
			{discussions.map((e) => (
				<DiscussionCard discussion_info={e} loggedInState={loggedInState} />
			))}
		</div>
	);
};

export default DiscussionList;
