import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import HoverButton from '../buttons/HoverButton';
import { Link } from 'react-router-dom';

const ProfileContents = ({ profileId }) => {
	return (
		<div
			style={{
				display: 'flex',
				color: 'white',
				marginLeft: 'auto',
				marginRight: '100px',
				width: '50%',
				flexDirection: 'column',
				padding: '20px',
				marginLeft: '200px',
			}}
		>
			<h1 style={{ color: 'white' }}>Contributions</h1>
			<h1 style={{ backgroundColor: 'white' }} />

			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<Link to={`/contributions/books/${profileId}`}>
					<HoverButton type='books' />
				</Link>
				<Link to={`/contributions/notes/${profileId}`}>
					<HoverButton type='notes' />
				</Link>
			</div>

			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<HoverButton type='questions' />
				<Link to={`/contributions/projects/${profileId}`}>
					<HoverButton type='projects' />
				</Link>
			</div>

			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<HoverButton type='discussions' />
				<HoverButton type='answers' />
			</div>

			{/* <Button variant='primary' style={{ height: '25%', marginTop: '20px' }}>
				Books
			</Button> */}
		</div>
	);
};

export default ProfileContents;
