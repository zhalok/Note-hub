import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import dp from '../images/dp.jpg';

const ProfileInfo = ({ profileInfo }) => {
	const { name, registration_id, session } = profileInfo;

	return (
		<div
			style={{
				height: '100%',
				width: '30%',
				marginRight: 'auto',
				backgroundColor: 'white',
				display: 'flex',
				padding: '20px',
				marginLeft: '100px',
			}}
		>
			<div
				style={{
					height: '50%',
					display: 'flex',
					flexDirection: 'column',
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			>
				<img
					src={dp}
					style={{
						verticalAlign: 'middle',
						width: '200px',
						height: '200px',
						borderRadius: '50%',
					}}
				/>
				<div className='basic-info' style={{ marginTop: '50px' }}>
					<div className='name' style={{ fontSize: '30px' }}>
						{name}
					</div>
					<div className='RegNo'>Reg No: {registration_id}</div>
					<div className='Session'>Session: {session}</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
