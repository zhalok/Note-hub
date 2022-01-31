import React, { useState } from 'react';
import bookImg from '../../images/contributors.png';
import { useHistory } from 'react-router-dom';
import {
	Card,
	Typography,
	CardActions,
	CardMedia,
	CardContent,
	Button,
} from '@mui/material';

export default function ContributorDashboardCard({ contributors }) {
	const history = useHistory();
	const [elevation, setElevation] = useState(0);
	return (
		<div>
			<Card
				sx={{
					width: 345,
					marginLeft: '20px',
					height: '100%',
				}}
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
					image={bookImg}
					alt='green iguana'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Contributors
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Currently we have {contributors} active contributors Thank you all
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size='small'
						onClick={() => {
							history.push('/users');
						}}
					>
						See Contributors
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}
