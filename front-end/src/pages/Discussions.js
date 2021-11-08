import React from 'react';
import Navbar from '../components/Navbar';
import DiscussionCard from '../components/DiscussionCard';

export default function Discussions({
	nav_info,
	loggedInState,
	handleLog,
	userId,
}) {
	return (
		<div
			className='ht'
			style={{
				backgroundSize: 'cover',
				padding: '10px',
				backgroundColor: '#02242c',
			}}
		>
			<Navbar
				nav_link={nav_info}
				loggedInState={loggedInState}
				handleLog={handleLog}
				userId={userId}
			/>
			<div style={{ marginTop: '100px', padding: '10px' }}>
				<DiscussionCard />
			</div>
		</div>
	);
}
