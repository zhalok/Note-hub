import React, { useState } from 'react';
import noteImg from '../../images/notes.jpg';
import { useHistory } from 'react-router-dom';
import {
	Card,
	Typography,
	CardActions,
	CardMedia,
	CardContent,
	Button,
} from '@mui/material';

export default function NoteDashboardCard({ notes }) {
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
						Notes
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Currently we have {notes} in our collection contributed by our
						verified users
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size='small'
						onClick={() => {
							history.push('/notes');
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
