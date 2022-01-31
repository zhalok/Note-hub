import React, { useState } from 'react';
import bookImg from '../../images/books.jpg';
import { useHistory } from 'react-router-dom';
import {
	Card,
	Typography,
	CardActions,
	CardMedia,
	CardContent,
	Button,
} from '@mui/material';

export default function BookDashboardCard({ books }) {
	const history = useHistory();
	const [elevation, setElevation] = useState(0);
	return (
		<div>
			<Card
				sx={{ width: 345 }}
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
						Books
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Currently we have {books} in our collection contributed by our
						verified users
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size='small'
						onClick={() => {
							history.push('/books');
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
