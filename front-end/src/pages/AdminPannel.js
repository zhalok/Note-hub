import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import SideNavbarDrawer from '../components/others/SideNavDrawer';
import { useState } from 'react';
import GeneralPopUpMessage from '../components/messages/GeneralPopUpNotification';
import BasicInfoContext from '../Contexts/BasicInfoContext';
import RegistrationRequestPage from '../pages/RegistrationRequestPage';
import { Redirect, Route, Router } from 'react-router-dom';

let windowUrl = 'https://notehub-font-end.web.app';
let apiUrl = 'https://notehubapi.herokuapp.com';

export default function AdminPannel({ handleLog, loggedInState }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showMessage, setShowMessage] = useState('');

	// React.useEffect(() => {
	// 	if (loggedInState == true) {

	// 		return;
	// 	}
	// }, [loggedInState]);

	const authenticate = () => {
		fetch(`${apiUrl}/admin/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data) {
					handleLog({ user: 'admin' });
					// window.location = `${windowUrl}/admin/requests`;
				} else {
					setShowMessage(true);
				}
			});
	};
	if (loggedInState == true) {
		return <Redirect to='/admin/requests' />;
	} else
		return (
			<div>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<div>
						<BasicInfoContext.Consumer>
							{({ loggedInState }) => {
								return <SideNavbarDrawer loggedInState={loggedInState} />;
							}}
						</BasicInfoContext.Consumer>
					</div>
					<div
						style={{
							marginTop: '200px',
							width: '30%',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					>
						<GeneralPopUpMessage
							show={showMessage}
							onHide={() => {
								setShowMessage(false);
							}}
							message={'Sorry you are not registered'}
						/>
						<Box
							component='form'
							sx={{
								'& > :not(style)': { m: 1, width: '100%' },
							}}
							noValidate
							autoComplete='off'
						>
							<div
								style={{
									marginLeft: 'auto',
									marginRight: 'auto',
									width: 'fit-content',
								}}
							>
								<Typography variant='h4' gutterBottom component='div'>
									Adminstration Site
								</Typography>
							</div>

							<TextField
								id='outlined-basic'
								label='Username'
								variant='outlined'
								type='email'
								onChange={(e) => {
									setUsername(e.target.value);
								}}
							/>
							<TextField
								id='outlined-basic'
								label='Password'
								variant='outlined'
								type='password'
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
							{/* <Link
							to={'/admin/requests'}
							style={{ width: '100%', marginTop: '50px' }}
						> */}
							<Button
								variant='contained'
								color='success'
								style={{ width: '100%', marginTop: '20px' }}
								onClick={() => {
									authenticate();
								}}
							>
								Log in
							</Button>
							{/* </Link> */}

							{/* <Button variant='outlined'>Sign Up</Button> */}
						</Box>
					</div>
				</div>
			</div>
		);
}
