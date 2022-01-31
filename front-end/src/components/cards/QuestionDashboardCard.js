import React, { useState } from 'react';
import questionImg from '../../images/questions.jpg';
import { useHistory } from 'react-router-dom';
import {
	Card,
	Typography,
	CardActions,
	CardMedia,
	CardContent,
	Button,
} from '@mui/material';

export default function QuestionDashboardCard({ questions }) {
	const [elevation, setElevation] = useState(0);
	const history = useHistory();
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
					image={questionImg}
					alt='green iguana'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Questions
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Currently we have {questions} in our collection contributed by our
						verified users
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size='small'
						onClick={() => {
							history.push('/questions');
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
