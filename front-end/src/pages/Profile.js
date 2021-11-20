import React, { Component } from 'react';
import ProfileInfo from '../components/ProfileInfo';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router';

import '../App.css';

var sectionStyle = {
	backgroundSize: 'cover',
	padding: '10px',
	backgroundColor: '#02242c',
};

const Profile = ({ nav_info, loggedInState, handleLog, userId }) => {
	const { id } = useParams();
	return (
		<div style={sectionStyle} className='ht'>
			<Navbar
				nav_link={nav_info}
				loggedInState={loggedInState}
				handleLog={handleLog}
				userId={userId}
			/>
			<div style={{ marginTop: '100px' }}>
				<ProfileInfo profileId={id} />
			</div>
		</div>
	);
};

export default Profile;
