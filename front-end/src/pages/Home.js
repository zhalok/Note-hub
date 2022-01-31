import Navbar from '../components/others/Navbar';
import Caro from '../components/others/Caro';

import '../App.css';

import Img from '../images/Notehub.png';

import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';

import backgroundImage from '../images/signup.jpg';
import study from '../images/study.png';
import BasicInfoContext from '../Contexts/BasicInfoContext';
import SideNavbarDrawer from '../components/others/SideNavDrawer';
import { Button, Typography } from '@mui/material';
import Dashboard from '../components/others/Dashboard';
import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { useEffect } from 'react';

var sectionStyle = {
	display: 'flex',
	flexDirection: 'column',
	// padding: '20px',
	// paddingTop: '80px',
	// backgroundImage: `url(${backgroundImage})`,

	/* Full height */
	height: '100%',

	/* Center and scale the image nicely */
	// backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	// backgroundColor: '#02242c',
};

let apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';

// apiURL = 'http://localhost:5000';

export default function Home() {
	const [books, setBooks] = useState(0);
	const [notes, setNotes] = useState(0);
	const [questions, setQuestions] = useState(0);
	const [projects, setProjects] = useState(0);
	const [users, setUsers] = useState(0);
	const [discussions, setDiscussions] = useState(0);
	const [contributeButtonVariant, setContributeButtonVariant] =
		useState('outlined');
	const history = useHistory();

	const get_overview = () => {
		fetch(`${apiURL}/overview`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				const { books, notes, questions, projects, users, discussions } = data;
				setBooks(books);
				setNotes(notes);
				setQuestions(questions);
				setProjects(projects);
				setUsers(users);
				setDiscussions(discussions);
			})
			.catch();
	};
	useEffect(() => {
		get_overview();
	}, []);
	// console.log(document.getElementById('DiscussionDashboardCard').style.height);
	return (
		<>
			<BasicInfoContext.Consumer>
				{({ nav_info, loggedInState, handleLog, userId }) => (
					<SideNavbarDrawer
						nav_link={nav_info}
						loggedInState={loggedInState}
						handleLog={handleLog}
						userId={userId}
					/>
				)}
			</BasicInfoContext.Consumer>

			<div style={sectionStyle} className='ht'>
				<img
					style={{
						marginLeft: 'auto',
						marginRight: 'auto',
					}}
					src={Img}
				/>

				<Typography
					variant='h6'
					style={{
						display: 'flex',
						marginLeft: 'auto',
						marginRight: 'auto',
						color: 'black',
					}}
				>
					Explore, Contribute, Discuss
				</Typography>

				<div className='row'>
					<div className='col-sm-10 ml-auto mr-auto'>
						<Dashboard
							books={books}
							notes={notes}
							questions={questions}
							projects={projects}
							discussions={discussions}
							contributors={users}
						/>
					</div>
				</div>

				<div
					className='container text-center'
					style={{
						marginBottom: '200px',
						flexDirection: 'column',
						display: 'flex',
						width: '30%',
						marginLeft: 'auto',
						marginRight: 'auto',
					}}
				>
					{/* <Link
						type='button'
						to='/books'
						className='btn btn-primary '
						style={{
							width: '100%',
							boxShadow:
								'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
						}}
					>
						Browse
					</Link> */}
					<Button
						variant='contained'
						startIcon={<ExploreIcon />}
						fullWidth
						onClick={() => {
							history.push('/books');
						}}
					>
						Take a tour
					</Button>

					<Button
						variant='contained'
						// color='success'
						startIcon={<ForumIcon />}
						fullWidth
						onClick={() => {
							history.push('/discussions');
						}}
						style={{ marginTop: '20px' }}
					>
						Start Discussing
					</Button>

					<Button
						id='contribute_button'
						variant={contributeButtonVariant}
						startIcon={<AddLinkIcon />}
						fullWidth
						style={{ marginTop: '20px' }}
						onMouseOver={() => {
							setContributeButtonVariant('contained');
						}}
						onMouseOut={() => {
							setContributeButtonVariant('outlined');
						}}
						onClick={() => {
							history.push('/contribute');
						}}
					>
						Start Contributing
					</Button>
				</div>
			</div>
		</>
	);
}
