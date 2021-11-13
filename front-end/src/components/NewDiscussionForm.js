import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const NewDiscussionForm = (props) => {
	const submitDiscussion = (discussion) => {
		const { discussionTitle, discussionBody } = discussion;
	};
	return (
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
				<input className='form-control' type='text' />
				<br />

				<FloatingLabel controlId='floatingTextarea2'>
					<h4>Body</h4>
					<Form.Control
						as='textarea'
						placeholder='Start your discussion here'
						style={{ height: '100px' }}
					/>
				</FloatingLabel>
				<br />
			</Modal.Body>
			<Modal.Footer>
				<Button variant='success' onClick={props.onHide}>
					Add
				</Button>
				<Button variant='danger' onClick={props.onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default NewDiscussionForm;
