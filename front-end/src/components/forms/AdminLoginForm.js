import React from 'react';
import FadeInButton from '../buttons/FadeButton';
import { Link } from 'react-router-dom';

const AdminLoginForm = () => {
	return (
		<div
			style={{
				width: '50%',

				display: 'block',
				flexDirection: 'column',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginTop: '150px',
				backgroundColor: '#312e67',
				height: '350px',
				padding: '30px',
				borderRadius: '10px',
				boxShadow:
					'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
			}}
		>
			<div
				style={{
					color: 'white',
					display: 'block',
					marginLeft: 'auto',
					marginRight: 'auto',
					width: 'fit-content',
					height: '40%',
					border: '0px solid black',
				}}
			>
				<div>
					<h1
						style={{
							height: 'fit-content',
							border: '0px solid red',
						}}
					>
						Admin Login
					</h1>
				</div>
			</div>
			<div
				style={{
					width: '60%',
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			>
				<input
					type='email'
					class='form-control'
					id='adminUsername'
					placeholder='Username'
				/>
				<input
					type='password'
					className='form-control'
					id='adminPassword'
					placeholder='password'
				/>
				<Link to={'/admin/requests'}>
					<FadeInButton normalColor='#f4511e' hoverColor='white' text='Login' />
				</Link>
			</div>
		</div>
	);
};

export default AdminLoginForm;
