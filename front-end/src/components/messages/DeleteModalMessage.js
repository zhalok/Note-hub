import React from 'react';
import Toast from 'react-bootstrap/Toast';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DeleteModalMessage({
	showNotificationModal,
	setShowNotificationModal,
}) {
	const handleClose = () => {
		setShowNotificationModal(false);
	};
	return (
		<Modal show={showNotificationModal} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Answer was added</Modal.Title>
			</Modal.Header>
			<Modal.Body>Your answer for the discussion was added</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default NotificationMessage;
