import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/books.png';
import ModalMessage from './ModalMessage';
import Button from 'react-bootstrap/Button';
const BookCardStyle = require('../styles/ContentCardStyle');
const ContentCardImageStyle = require('../styles/ContentCardImageStyle');

const apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';

const sendEmailUsingNodemailer = async (
	contributorEmail,
	contributorName,
	contetnName,
	setModalShow
) => {
	try {
		const respornse = await fetch(
			`https://notehubapi.herokuapp.com/sendEmail`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					contributorName,
					contributorEmail,
					contetnName,
				}),
			}
		);
		const data = await respornse.json();
		// alert('An email was sent to the contributor');
		setModalShow();
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};

export default function ContentCard(props) {
	const { info, userId, loggedInState, contentImg, deleteContent } = props;
	console.log(info);

	const [modalShow, setModalShow] = React.useState(false);
	const [message, setMessage] = React.useState('');
	const [displayOptions, setDisplayOptions] = useState('none');
	console.log(info.contributor_id);
	useEffect(() => {
		if (userId && userId == info.contributor_id) {
			setDisplayOptions('block');
		}
	}, [userId]);

	let linkDIsplay;
	if (info.link)
		linkDIsplay = (
			<Link
				type='button'
				className='btn btn-primary'
				style={{
					display: 'flex',
					width: 'fit-content',
					boxShadow:
						'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
				}}
				onClick={() => window.open(`${info.link}`, '_blank')}
			>
				Go to link
			</Link>
		);
	else
		linkDIsplay = (
			<Link
				id='showModal'
				type='button'
				className='btn btn-success'
				style={{
					display: 'flex',
					width: 'fit-content',
					boxShadow:
						'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
				}}
				onClick={() => {
					sendEmailUsingNodemailer(
						info.contributor_email,
						info.contributor_name,
						info.name,
						() => {
							setMessage(
								'A request was mailed to the contributor of this content'
							);
							setModalShow(true);
						}
					);
				}}
			>
				Request
			</Link>
		);

	return (
		<div className='card' style={BookCardStyle}>
			<ModalMessage
				message={message}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			<img
				class='card-img-top'
				src={contentImg}
				alt='Card image cap'
				style={ContentCardImageStyle}
			/>

			<div class='card-body'>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<h2 className='display-5'>{info.name}</h2>
				</div>

				<p className='blockquote-footer' style={{ fontSize: '15px' }}>
					{info.contributor_name}
				</p>
				<p class='.lead'>{info.description}</p>

				<div style={{ display: 'flex' }}>
					<Link
						id='preview'
						type='button'
						className='btn btn-outline-primary'
						style={{
							display: 'flex',
							marginLeft: 'auto',
							width: 'fit-content',
							marginRight: '10px',

							boxShadow:
								'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
						}}
					>
						Preview
					</Link>
					{linkDIsplay}
				</div>
				<Button
					style={{
						display: displayOptions,
						width: '35%',
						marginLeft: 'auto',
						marginTop: '20px',
						boxShadow:
							'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
					}}
					variant='danger'
					onClick={() => {
						deleteContent(info._id);
					}}
				>
					Delete
				</Button>
			</div>
		</div>
	);
}
