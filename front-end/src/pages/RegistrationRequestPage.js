import { typography } from '@mui/system';
import React, { useEffect, useState } from 'react';
import RegistrationRequestsList from '../components/lists/RegistrationRequestsList';
import GeneralPopUpNotification from '../components/messages/GeneralPopUpNotification';
import SideNavbarDrawer from '../components/others/SideNavDrawer';
import { Divider, Typography } from '@mui/material';
import BasicInfoContext from '../Contexts/BasicInfoContext';
import Button from '@mui/material/Button';
import { Redirect } from 'react-router-dom';

let windowUrl = 'https://notehub-font-end.web.app';
let apiUrl = 'https://notehubapi.herokuapp.com';

export default function RegistrationRequestPage({ loggedInState }) {
	const [requestList, setRequestList] = useState([]);
	const [changer, setChanger] = useState({});
	const [showMessage, setShowMessage] = useState(false);
	const [redirect, setRedirect] = useState(null);

	useEffect(() => {
		fetch(`${apiUrl}/users/requests`)
			.then((res) => res.json())
			.then((data) => setRequestList(data))
			.catch((err) => console.log(err));
	}, [changer, loggedInState]);

	// if (redirect) {
	// 	return <Redirect to={redirect} />;
	// }

	if (loggedInState == false) {
		return <Redirect to='/admin/login' />;
	}

	if (loggedInState == false) {
		return (
			<div>
				<BasicInfoContext.Consumer>
					{({ loggedInState, handleLog }) => {
						return (
							<SideNavbarDrawer
								loggedInState={loggedInState}
								handleLog={handleLog}
								setRedirect
							/>
						);
					}}
				</BasicInfoContext.Consumer>

				<div
					style={{
						display: 'flex',
						marginLeft: 'auto',
						marginRight: 'auto',
						width: 'fit-content',
						marginTop: '100px',
						flexDirection: 'column',
					}}
				>
					<Typography variant='h3'>Dear Admin,</Typography>
					<Typography variant='h4'>You are not logged in</Typography>
					<Button
						style={{ marginTop: '20px' }}
						variant='contained'
						onClick={() => {
							window.location = `${windowUrl}/admin/login`;
						}}
					>
						Go to login page
					</Button>
				</div>
			</div>
		);
	} else
		return (
			// <div></div>
			<div>
				<GeneralPopUpNotification
					show={showMessage}
					onHide={() => {
						setShowMessage(false);
					}}
					message={'User has been verified'}
				/>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<BasicInfoContext.Consumer>
						{({ loggedInState, handleLog }) => {
							return (
								<SideNavbarDrawer
									loggedInState={loggedInState}
									handleLog={handleLog}
								/>
							);
						}}
					</BasicInfoContext.Consumer>
					<div style={{ marginTop: '100px', width: '100%' }}>
						<Typography variant='h4' component='h2' style={{ color: 'black' }}>
							Requests
						</Typography>
						<Divider
							light='false'
							variant='fullWidth'
							style={{ width: '100%' }}
						/>
						<RegistrationRequestsList
							requests={requestList}
							setChanger={setChanger}
							setShowMessage={setShowMessage}
						/>
					</div>
				</div>
			</div>
		);
}
