import Navbar from '../components/Navbar';
import Caro from '../components/Caro';
import UserDashboardCard from '../components/UserDashboardCard';

import '../App.css';

import Img from '../images/Notehub.png';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import backgroundImage from '../images/signup.jpg';
import study from '../images/study.png';

var sectionStyle = {
	display: 'flex',
	flexDirection: 'column',
	padding: '20px',
	paddingTop: '80px',
	// backgroundImage: `url(${backgroundImage})`,

	/* Full height */
	height: '100%',

	/* Center and scale the image nicely */
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundColor: '#02242c',
};

const apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';

export default class Home extends Component {
	state = {
		books: 0,
		notes: 0,
		questions: 0,
		projects: 0,
	};

	getInformation = () => {
		fetch(`${apiURL}/overview`)
			.then((res) => res.json())
			.then((data) => {
				console.log(typeof data);
				const books = data[0].books ? data[0].books : 0;
				const notes = data[0].notes ? data[0].notes : 0;
				const questions = data[0].questions ? data[0].questions : 0;
				const projects = data[0].projects ? data[0].projects : 0;
				this.setState({
					books,
					notes,
					questions,
					projects,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	componentDidMount() {
		this.getInformation();
	}

	render() {
		const { nav_info, loggedInState, handleLog, userId } = this.props;
		const { books, notes, questions, projects } = this.state;

		return (
			<>
				<Navbar
					nav_link={nav_info}
					loggedInState={loggedInState}
					handleLog={handleLog}
					userId={userId}
				/>
				<Caro books={books} notes={notes} projects={projects} />
				<div style={sectionStyle} className='ht'>
					<img
						style={{
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
						src={Img}
					/>

					<p
						style={{
							display: 'flex',
							marginLeft: 'auto',
							marginRight: 'auto',
							color: 'rgb(148, 159, 133)',
						}}
					>
						The only HUB you need
					</p>

					{/* <div className='row'>
						<div className='col-sm-10 ml-auto mr-auto'>
							<Dashboard
								books={books}
								notes={notes}
								questions={questions}
								projects={projects}
							/>
						</div>
					</div> */}

					{/* <UserDashboardCard /> */}

					<div className='container text-center'>
						<Link
							type='button'
							to='/books'
							className='btn btn-primary mt-5 btn-lg h-10 w-10 p-4'
							style={{
								width: '30%',
								boxShadow:
									'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
							}}
						>
							Browse
						</Link>
						<br />
						<Link
							type='button'
							to='/contribute'
							className='btn btn-outline-success mt-5 btn-lg h-10 w-10 p-4'
							style={{
								width: '30%',
								boxShadow:
									'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
							}}
						>
							+ Contribute
						</Link>
					</div>
				</div>
			</>
		);
	}
}
