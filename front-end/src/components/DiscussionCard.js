import React from 'react';
import Button from 'react-bootstrap/Button';

export default function DiscussionCard(props) {
	const { discussion_info } = props;
	const {
		title,
		body,
		discussion_starters_name,
		discussion_starters_email,
		votes,
	} = discussion_info;

	console.log(discussion_info);

	return (
		<div>
			<div
				className='discussionCard'
				style={{
					width: '70%',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '100px',
					backgroundColor: 'white',
					padding: '20px',
					boxShadow:
						'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
					borderRadius: '10px',
				}}
			>
				<h1>{title}</h1>
				<hr />
				<p>{body}</p>
				<div
					style={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						marginTop: '70px',
					}}
				>
					<Button
						variant='success'
						style={{
							display: 'flex',
							width: 'fit-content',
							boxShadow:
								'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
						}}
					>
						Up Vote
					</Button>
					<Button
						variant='danger'
						style={{
							display: 'flex',
							width: 'fit-content',
							boxShadow:
								'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
							marginLeft: '10px',
						}}
					>
						Down Vote
					</Button>{' '}
					<Button
						variant='primary'
						style={{
							display: 'flex',
							width: 'fit-content',
							boxShadow:
								'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
							marginLeft: 'auto',
						}}
					>
						Comment
					</Button>
				</div>
			</div>
		</div>
	);
}
