import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ToastContext from '../../Contexts/ToastContext';
import NewAnswerForm from '../forms/newAnswerForm';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import WaitModalMessage from '../messages/WaitModalMessage';

export default function DiscussionCard(props) {
	const {
		discussion_info,
		loggedInState,
		userName,
		userId,
		deleteDiscussion,
		changer,
	} = props;
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

	const [answer, setAnswer] = useState('');
	const [show, setShow] = useState(false);

	const [showOptions, setShowOptions] = useState('none');

	let deleteButton;
	if (userId == discussion_starters_id) {
		deleteButton = (
			<IconButton aria-label="delete"
				variant='secondary'
				style={{ marginLeft: 'auto' }}
				onClick={() => {
					deleteDiscussion(_id);
				}}
			>
				<DeleteIcon />
			</IconButton>
		);
	}

	return (
		<div>
			<div
				className='discussionCard'
				style={{
					width: '70%',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '50px',
					backgroundImage: 'linear-gradient(170deg, rgba(83, 185, 230), rgba(35, 103, 158))',
					padding: '10px',
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

				<h3>{title}</h3>
				<small>-{discussion_starters_name}</small>
				<hr />
				<p>{body}</p>
				<div
					style={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						marginTop: '30px',
					}}
				>
					<Link to={`/answers/${_id}`}>
						<Button
							variant='dark'
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
						variant='outline-light'
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
