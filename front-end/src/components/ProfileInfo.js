import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import dp from '../images/user.png';

const ProfileInfo = () => {
	const [profileInfo, setProfileInfo] = useState({});

	const { id } = useParams();

	useEffect(() => {
		fetch(`http://localhost:5000/users/id/${id}`)
			.then((res) => res.json())
			.then((data) => setProfileInfo(data[0]))
			.catch((err) => console.log(err));
	}, [id]);

	return (
		<div>
			<div
				style={{
					width: '50%',
					marginLeft: 'auto',
					marginRight: 'auto',
					backgroundColor: 'white',
					display: 'flex',
					padding: '20px',
				}}
			>
				<div style={{ height: '50%', flexDirection: 'row', display: 'flex' }}>
					<img src={dp} style={{ height: '200px', width: '200px' }} />
				</div>
				<div style={{ height: '50%' }}></div>
			</div>
		</div>
	);
};

export default ProfileInfo;
