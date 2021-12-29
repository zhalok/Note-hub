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
			<h1 style={{ color: 'black' }}>Contributions</h1>
			<h1 style={{ backgroundColor: 'white' }} />

			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<Link to={`/contributions/books/${profileId}`}>
					<HoverButton type='Books' bgColor='#0a64c4' />
				</Link>
				<Link to={`/contributions/notes/${profileId}`}>
					<HoverButton type='Notes' bgColor='#057dfc' />
				</Link>
			</div>

			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<Link to={`/contributions/questions/${profileId}`}>
					<HoverButton type='Questions' bgColor='#0531a8' />
				</Link>

				<Link to={`/contributions/projects/${profileId}`}>
					<HoverButton type='Projects' bgColor='#0845bf' />
				</Link>
			</div>

			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<Link to={`/contributions/discussions/${profileId}`}>
					<HoverButton type='Discussions' bgColor='#112869' />
				</Link>
			</div>

			{/* <Button variant='primary' style={{ height: '25%', marginTop: '20px' }}>
				Books
			</Button> */}
		</div>
	);
};

export default ProfileContents;