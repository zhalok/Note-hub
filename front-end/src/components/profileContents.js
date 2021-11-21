import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import HoverButton from './HoverButton';

const ProfileContents = () => {
	const { id } = useParams();
	console.log(id);
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
				marginTop: '20px',
				marginLeft: '200px',
			}}
		>
			<h1 style={{ color: 'white' }}>Contributions</h1>
			<h1 style={{ backgroundColor: 'white' }} />
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<HoverButton type='books' bgColor='#020024' />
				<HoverButton type='notes' bgColor='#020024' />
			</div>

			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<HoverButton type='questions' bgColor='#0cccf9' />
				<HoverButton type='projects' bgColor='#0cccf9' />
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
