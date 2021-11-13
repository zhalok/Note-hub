import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const NewDiscussionForm = (props) => {
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
				<br />
				<FloatingLabel
					controlId='floatingTextarea'
					label='Comments'
					className='mb-3'
				>
					<Form.Control as='textarea' placeholder='Leave a comment here' />
				</FloatingLabel>
				<FloatingLabel controlId='floatingTextarea2' label='Comments'>
					<Form.Control
						as='textarea'
						placeholder='Leave a comment here'
						style={{ height: '100px' }}
					/>
				</FloatingLabel>
				<br />
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default NewDiscussionForm;
