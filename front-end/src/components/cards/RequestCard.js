import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from 'react-bootstrap/Button';
import { badgeClasses, Typography } from '@mui/material';
import img from '../../images/dp.jpg';
import GeneralPopUpNotification from '../messages/GeneralPopUpNotification';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { borderRadius } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

let apiUrl = 'https://notehubapi.herokuapp.com';

const RequestCard = (props) => {
	const { info } = props;
	console.log(info.registration_id);
	console.log(info.email);
	const verify_user = () => {
		fetch(`${apiUrl}/admin/verify/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				registration_id: info.registration_id,
				email: info.email,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				props.setShowMessage(true);
				props.setChanger({});
			})
			.catch();
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				marginTop: '50px',
				width: '50%%',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				<Card
					sx={{
						minWidth: 275,
						width: 400,
						backgroundColor: '#978e8e',
						// borderRadius: '10px',
					}}
				>
					<CardContent>
						<List
							sx={{
								width: '100%',
								bgcolor: 'background.paper',
								borderRadius: '10px',
							}}
						>
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<AccountCircleIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary='Name' secondary={info.name} />
							</ListItem>
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<CastForEducationIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary='Session' secondary={info.session} />
							</ListItem>
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<BadgeOutlinedIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary='Registration'
									secondary={info.registration_id}
								/>
							</ListItem>
						</List>
						<div style={{ marginTop: '20px' }}>
							<CardActions>
								<Button
									size='small'
									variant='success'
									onClick={() => {
										verify_user();
									}}
								>
									Approve
								</Button>
								<Button size='small' variant='danger'>
									Delete
								</Button>
							</CardActions>
						</div>
					</CardContent>
				</Card>
			</Box>
		</div>
	);
};

export default RequestCard;
