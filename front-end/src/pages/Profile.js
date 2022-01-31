import React, { Component, useEffect, useState } from 'react';
import ProfileInfo from '../components/profile/ProfileInfo';
import Navbar from '../components/others/Navbar';
import { useParams } from 'react-router';
import '../App.css';
import ProfileContents from '../components/profile/profileContents';
import BasicInfoContext from '../Contexts/BasicInfoContext';
import RegistrationRequestPage from '../pages/RegistrationRequestPage';
import SideNavbarDrawer from '../components/others/SideNavDrawer';

var sectionStyle = {
	backgroundSize: 'cover',
	padding: '10px',
	backgroundColor: '#8bbaf7',
};

const Profile = ({ nav_info, loggedInState, handleLog, userId }) => {
	const { id } = useParams();
	const [profileInfo, setProfileInfo] = useState({});

	let windowUrl = 'http://localhost:3000';

	useEffect(() => {
		// if (userId == 'admin');
		// {
		// 	window.location = `${windowUrl}/profile/admin`;
		// 	return;
		// }
		fetch(`https://notehubapi.herokuapp.com/users/id/${id}`)
			.then((res) => res.json())
			.then((data) => setProfileInfo(data[0]))
			.catch((err) => console.log(err));
	}, []);

	if (profileInfo) {
		return (
			<div className='ht'>
				<BasicInfoContext.Consumer>
					{({ nav_info, loggedInState, handleLog, userId }) => (
						<SideNavbarDrawer
							nav_link={nav_info}
							loggedInState={loggedInState}
							handleLog={handleLog}
							userId={userId}
						/>
					)}
				</BasicInfoContext.Consumer>

				<div
					style={{
						display: 'flex',

						padding: '50px',

						flexDirection: 'row',
					}}
				>
					<ProfileInfo profileInfo={profileInfo} />
					<ProfileContents profileId={id} />
				</div>
			</div>
		);
	} else return <div>No Data Found</div>;
};

export default Profile;
