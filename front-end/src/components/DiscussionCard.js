import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ToastContext from '../Contexts/ToastContext';
import NewAnswerForm from './newAnswerForm';
import { Link } from 'react-router-dom';

export default function DiscussionCard(props) {
	const { discussion_info, loggedInState, userName, userId } = props;
	const {
		_id,
		title,
		body,
		discussion_starters_name,
		discussion_starters_email,
		discussion_starters_id,
		votes,
	} = discussion_info;

	console.log(userName);
	console.log(userId);

	let deleteButton;
	if (userId == discussion_starters_id) {
		deleteButton = (
			<Button variant='danger' style={{ marginLeft: 'auto' }}>
				Delete
			</Button>
		);
	}

	const [answer, setAnswer] = useState('');
	const [show, setShow] = useState(false);
	const [showOptions, setShowOptions] = useState('none');

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
				<ToastContext.Consumer>
					{({ showNotificationModal, setShowNotificationModal }) => {
						return (
							<NewAnswerForm
								show={show}
								onHide={() => {
									setShow(false);
								}}
								loggedInState={loggedInState}
								discussion_id={_id}
								discussion_starters_email={discussion_starters_email}
								answer_providers_name={userName}
								answer_providers_id={userId}
								discussion_title={title}
								discussion_body={body}
								showNotificationModal={showNotificationModal}
								setShowNotificationModal={setShowNotificationModal}
							/>
						);
					}}
				</ToastContext.Consumer>

				<h1>{title}</h1>
				<small>-{discussion_starters_name}</small>
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
					<Link to={`/answers/${_id}`}>
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
					</Link>
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
					{deleteButton}
					{/* <Button variant='danger' style={{ marginLeft: 'auto' }}>
							Delete
						</Button> */}{' '}
				</div>
			</div>
		</div>
	);
}
