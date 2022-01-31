import React, { useState } from 'react';
import noteImg from '../../images/projects.jpg';
import { useHistory } from 'react-router-dom';
import {
	Card,
	Typography,
	CardActions,
	CardMedia,
	CardContent,
	Button,
} from '@mui/material';

export default function ProjectDashboardCard({ projects }) {
	const history = useHistory();
	const [elevation, setElevation] = useState(0);
	return (
		<div>
			<Card
				sx={{ width: 345, marginLeft: '20px' }}
				elevation={elevation}
				onMouseOver={() => {
					setElevation(20);
				}}
				onMouseOut={() => {
					setElevation(0);
				}}
			>
				<CardMedia
					component='img'
					height='140'
					image={noteImg}
					alt='green iguana'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Projects
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Currently we have {projects} in our collection contributed by our
						verified users
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size='small'
						onClick={() => {
							history.push('/projects');
						}}
					>
						Visit
					</Button>
					<Button
						size='small'
						onClick={() => {
							history.push('/contribute');
						}}
					>
						Contribute
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}
