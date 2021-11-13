import React from 'react';
import DiscussionCard from './DiscussionCard';

const DiscussionList = (props) => {
	const { discussions } = props;
	return (
		<div>
			{discussions.map((e) => (
				<DiscussionCard discussion_info={e} />
			))}
		</div>
	);
};

export default DiscussionList;
