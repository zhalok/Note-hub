import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {
	const { info } = props;
	return (
		<Modal
			{...props}
			size='md'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Details</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>{console.log(info)}</h4>
				<p>2018-19</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default function UserPopUp(props) {
	const { userInfo, modalShow, setModalShow } = { ...props };
	console.log(userInfo);
	return (
		<div style={{ marginTop: '100px' }}>
			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				info={userInfo}
			/>
		</div>
	);
}
