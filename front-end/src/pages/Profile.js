import React, { Component, useEffect, useState } from 'react';
import ProfileInfo from '../components/profile/ProfileInfo';
import Navbar from '../components/others/Navbar';
import { useParams } from 'react-router';

import '../App.css';
import ProfileContents from '../components/profile/profileContents';
import BasicInfoContext from '../Contexts/BasicInfoContext';

var sectionStyle = {
	backgroundSize: 'cover',
	padding: '10px',
	backgroundColor: '#02242c',
};

const Profile = ({ nav_info, loggedInState, handleLog, userId }) => {
	const { id } = useParams();
	const [profileInfo, setProfileInfo] = useState({});

	useEffect(() => {
		fetch(`http://localhost:5000/users/id/${id}`)
			.then((res) => res.json())
			.then((data) => setProfileInfo(data[0]))
			.catch((err) => console.log(err));
	}, []);

	if (profileInfo) {
		return (
			<div style={sectionStyle} className='ht'>
				<BasicInfoContext.Consumer>
					{({ nav_info, loggedInState, handleLog, userId }) => (
						<Navbar
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

						marginTop: '100px',
						padding: '50px',

						flexDirection: 'row',
						border: '1px solid black',
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
