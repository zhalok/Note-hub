import React from 'react';
import { useHistory } from 'react-router-dom';
import {
	Card,
	Button,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import img from '../../images/user.png';

const UserCard = (props) => {
	const { info } = props;
	const [spacing, setSpacing] = React.useState(5);
	const history = useHistory();
	console.log(info);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				marginTop: '30px',

				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			{info.map((e, index) => (
				<Card
					sx={{ width: 'fit-content', height: '200%' }}
					style={{ marginLeft: '50px', padding: '20px' }}
					elevation='10'
					key={index}
				>
					<CardMedia
						component='img'
						height='250'
						image={img}
						alt='green iguana'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{e.name}
						</Typography>
						<Typography variant='h6' color='text.secondary'>
							Session: {e.session}
						</Typography>
						<Typography variant='h6' color='text.secondary'>
							Reg: {e.registration_id}
						</Typography>
					</CardContent>
					<CardActions
						style={{
							width: 'fit-content',
							marginLeft: 'auto',
							marginRight: 'auto',
							marginTop: '10px',
							marginBottom: '10px',
						}}
					>
						<Button
							variant='outlined'
							startIcon={<GitHubIcon />}
							style={{ backgroundColor: '#171515', color: 'white' }}
							onClick={() => {
								window.open(e.github, '_blank');
							}}
						>
							Github
						</Button>
						<Button
							variant='outlined'
							style={{ backgroundColor: '#0077b5', color: 'white' }}
							startIcon={<LinkedInIcon />}
							onClick={() => {
								window.open(e.linkedin, '_blank');
							}}
						>
							Linkedin
						</Button>
						<Button
							variant='contained'
							color='success'
							endIcon={<SendIcon />}
							onClick={() => {
								history.push(`/profile/${e.registration_id}`);
							}}
						>
							Profile
						</Button>
					</CardActions>
				</Card>
			))}
		</div>
	);
};

export default UserCard;
