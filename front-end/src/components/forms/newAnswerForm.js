import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const NewAnswerForm = (props) => {
	const [title, setTitle] = useState({});
	const [body, setBody] = useState({});
	// const { setMessage } = props;
	const { showNotificationModal, setShowNotificationModal } = props;
	useEffect(() => {
		setTitle('');
		setBody('');
	}, [props.show]);

	const {
		loggedInState,
		discussion_starters_email,
		answer_providers_name,
		answer_providers_id,
		discussion_id,
		onHide,
		discussion_title,
		discussion_body,
	} = props;

	console.log(answer_providers_name);
	console.log(answer_providers_id);

	const submit_answer = () => {
		fetch('https://notehubapi.herokuapp.com/answers', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				body,
				discussion_id,
				discussion_title,
				discussion_starters_email,
				answer_providers_id,
				answer_providers_name,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setShowNotificationModal(true);
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
				<Modal.Title id='contained-modal-title-vcenter'>Answer</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<FloatingLabel controlId='floatingTextarea2'>
					<Form.Control
						as='textarea'
						placeholder='Contribute your answer here'
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
						onHide();
						submit_answer();
					}}
				>
					Contribute
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

export default NewAnswerForm;
