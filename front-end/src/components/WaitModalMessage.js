import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';

const WaitModalMessage = ({ show }) => {
	return (
		<div style={{ marginTop: '100px' }}>
			<Modal
				size='sm'
				aria-labelledby='contained-modal-title-vcenter'
				centered
				show={show}
			>
				<Spinner
					style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}
					animation='border'
					role='status'
				></Spinner>
				<Modal.Body style={{ marginLeft: 'auto', marginRight: 'auto' }}>
					Please wait
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default WaitModalMessage;
