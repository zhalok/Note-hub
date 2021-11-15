import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import NewAnswerForm from './newAnswerForm';

export default function DiscussionCard(props) {
	const { discussion_info, loggedInState } = props;
	const {
		title,
		body,
		discussion_starters_name,
		discussion_starters_email,
		userName,
		votes,
	} = discussion_info;

	const [answer, setAnswer] = useState('');
	const [show, setShow] = useState(false);

	const sendEmailNotification = () => {
		fetch('http://localhost:5000/sendEmail/sendNotification', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				from: userName,
				to: discussion_starters_email,
				discussion_title: title,
				body: answer,
			},
		});
	};

	return (
		<div>
			<div
				className='discussionCard'
				style={{
					width: '70%',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '50px',
					backgroundColor: 'white',
					padding: '20px',
					boxShadow:
						'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
					borderRadius: '10px',
				}}
			>
				<NewAnswerForm
					show={show}
					onHide={() => {
						setShow(false);
					}}
					loggedInState={loggedInState}
				/>
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
						variant='primary'
						style={{
							display: 'flex',
							width: 'fit-content',
							boxShadow:
								'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
						}}
					>
						See all answers
					</Button>
					<Button
						variant='outline-success'
						style={{
							display: 'flex',
							width: 'fit-content',
							boxShadow:
								'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
							marginLeft: '10px',
						}}
						onClick={() => {
							setShow(true);
						}}
					>
						Answer
					</Button>{' '}
				</div>
			</div>
		</div>
	);
}
