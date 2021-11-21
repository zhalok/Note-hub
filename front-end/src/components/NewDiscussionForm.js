import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const NewDiscussionForm = (props) => {
	const [title, setTitle] = useState({});
	const [body, setBody] = useState({});

	useEffect(() => {
		console.log('hello');
		setTitle('');
		setBody('');
	}, [props.show]);

	const {
		loggedInState,
		discussionStartersName,
		discussionStartersEmail,
		discussionStartersId,
	} = props;

	const submitDiscussion = () => {
		if (!title || !body) {
			alert('please give the title and body');
			return;
		}
		fetch('https://notehubapi.herokuapp.com/discussions/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				discussion_title: title,
				discussion_body: body,
				discussion_starters_name: discussionStartersName,
				discussion_starters_email: discussionStartersEmail,
				discussion_starters_id: discussionStartersId,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				props.onHide();
				props.setChanger({});
			})
			.catch((err) => console.log(err));
	};

	const form = (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					New Discussion
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Title</h4>
				<input
					className='form-control'
					type='text'
					placeholder='title'
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<br />

				<FloatingLabel controlId='floatingTextarea2'>
					<h4>Body</h4>
					<Form.Control
						as='textarea'
						placeholder='Start your discussion here'
						style={{ height: '100px' }}
						onChange={(e) => {
							setBody(e.target.value);
						}}
					/>
				</FloatingLabel>
				<br />
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant='success'
					onClick={() => {
						submitDiscussion();
					}}
				>
					Add
				</Button>
				<Button variant='danger' onClick={props.onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);

	const alertMessage = (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<div>
				<Modal.Body>You are not logged in</Modal.Body>
			</div>
		</Modal>
	);

	if (loggedInState == true) return form;
	else return alertMessage;
};

export default NewDiscussionForm;
