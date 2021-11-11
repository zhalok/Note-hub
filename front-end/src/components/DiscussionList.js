import React from 'react';
import DiscussionCard from './DiscussionCard';

const DiscussionList = (props) => {
	const { discussion_list } = props;
	return (
		<div>
			{discussion_list.map((e) => (
				<DiscussionCard discussion_info={e} />
			))}
		</div>
	);
};

export default DiscussionList;
