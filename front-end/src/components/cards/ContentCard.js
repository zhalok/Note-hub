import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalMessage from '../messages/ModalMessage';
// import Button from 'react-bootstrap/Button';
import DescriptionModal from '../messages/DescriptionModal';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';

const ContentCardImageStyle = {
	height: '10%',
	width: '10%',
	display: 'flex',
	marginLeft: 'auto',
	marginRight: 'auto',
	marginTop: '20px',
	marginLeft: '10px',
};

const BookCardStyle = {
	width: '40rem',
	marginLeft: 'auto',
	marginRight: 'auto',
	display: 'flex',
	// backgroundImage:
	// 	'http://api.thumbr.it/whitenoise-361x370.png?background=ffffffff&noise=5c5c5c&density=13&opacity=62',

	backgroundColor: 'white',
	// backgroundImage:
	// 'linear-gradient(120deg, rgba(39, 130, 186), rgba(122, 205, 250))',
	flexDirection: 'row',
	padding: '10px',
	marginTop: '20px',
	marginBottom: '20px',
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
	borderRadius: '10px',
};

let apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';
// apiURL = 'http://localhost:5000';

const sendEmailUsingNodemailer = async (
	contributorEmail,
	contributorName,
	contentName,
	contentType,
	setModalShow
) => {
	try {
		const respornse = await fetch(`${apiURL}/sendEmail`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				contributorName,
				contributorEmail,
				contentName,
				contentType,
			}),
		});
		const data = await respornse.json();
		// alert('An email was sent to the contributor');
		setModalShow();
		// console.log(data);
	} catch (err) {
		console.log(err);
	}
};

export default function ContentCard(props) {
	const { info, userId, loggedInState, contentImg, deleteContent } = props;
	console.log(info.name);
	console.log(info.type);

	const [modalShow, setModalShow] = React.useState(false);
	const [message, setMessage] = React.useState('');
	const [displayOptions, setDisplayOptions] = useState('none');
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	console.log(info.contributor_id);
	useEffect(() => {
		if (userId && userId == info.contributor_id) {
			setDisplayOptions('block');
		}
	}, [userId]);

	let linkDIsplay;
	if (info.link)
		linkDIsplay = (
			<button
				type='button'
				className='btn btn-dark'
				style={{
					display: 'flex',
					width: 'fit-content',
					height: 'fit-content',
					boxShadow:
						'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
				}}
				onClick={() => window.open(`${info.link}`, '_blank')}
			>
				Go to link
			</button>
		);
	else
		linkDIsplay = (
			<button
				id='showModal'
				type='button'
				className='btn btn-dark'
				style={{
					display: 'flex',
					width: 'fit-content',
					height: 'fit-content',
					boxShadow:
						'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
				}}
				onClick={() => {
					sendEmailUsingNodemailer(
						info.contributor_email,
						info.contributor_name,
						info.name,
						info.type,
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
			</button>
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
					<IconButton
						aria-label='delete'
						style={{
							display: displayOptions,
							marginLeft: 'auto',
						}}
						variant='outline-dark'
						onClick={() => {
							deleteContent(info._id);
						}}
					>
						<DeleteIcon color='error' />
					</IconButton>
				</div>

				<p
					className='blockquote-footer'
					style={{ fontSize: '15px', color: 'black' }}
				>
					{info.contributor_name}
				</p>

				<div style={{ display: 'flex' }}>
					<div
						style={{
							width: 'fit-content',
							marginLeft: 'auto',
							display: 'flex',
							flexDirection: 'row',
						}}
					>
						<button
							type='button'
							className='btn btn-primary'
							style={{
								display: 'flex',
								marginLeft: 'auto',
								width: 'fit-content',

								marginRight: '10px',
								height: 'fit-content',
								boxShadow:
									'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
							}}
							onClick={() => {
								setOpen(true);
							}}
						>
							See Description
						</button>
						{linkDIsplay}
					</div>
				</div>
			</div>
			<DescriptionModal
				open={open}
				handleOpen={handleOpen}
				handleClose={handleClose}
				description={info.description}
			/>
		</div>
	);
}
