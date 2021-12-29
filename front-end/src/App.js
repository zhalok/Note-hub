import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import Home from './pages/Home';
import Books from './pages/Books';
import Notes from './pages/Notes';
import Questions from './pages/Questions';
import Projects from './pages/Projects';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contribute from './pages/Contribute';
import Profile from './pages/Profile';
import Users from './pages/Users';
import Discussions from './pages/Discussions';
import BasicInfoContext from './Contexts/BasicInfoContext';

import './App.css';
import Answers from './pages/Answers';
import ProfileBooks from './pages/ProfileBooks';
import ProfileNotes from './pages/ProfileNotes';
import ProfileProjects from './pages/ProfileProjects';
import ProfileQuestions from './pages/ProfileQuestions';
import ProfileDiscussions from './pages/ProfileDiscussions';
import AdminPannel from './pages/AdminPannel';

import RegistrationRequestPage from './pages/RegistrationRequestPage';

export default class App extends Component {
	state = {
		isLoggedIn: false,
		userId: '',
		useName: '',
		userEmail: '',
		// adminLogin: false,
	};

	get_token() {
		const token = JSON.parse(sessionStorage.getItem('token'));

		if (token) {
			this.setState({
				isLoggedIn: true,
				userId: token.user,
			});

			fetch(`http://localhost:5000/users/id/${token.user}`)
				.then((res) => res.json())
				.then((data) => {
					this.setState({
						userName: data[0].name,
						userEmail: data[0].email,
					});
					console.log('fetched');
				})
				.catch((err) => console.log(err));
		} else {
			this.setState({
				isLoggedIn: false,
				userId: '',
			});
		}
	}

	set_token(token) {
		sessionStorage.setItem('token', JSON.stringify(token));
	}

	loginStateChanger = (token) => {
		if (this.state.isLoggedIn == true) {
			sessionStorage.clear();
		} else {
			this.set_token(token);
		}

		this.get_token();
	};

	componentDidMount() {
		this.get_token();
		document.body.style.backgroundColor = '#8bbaf7';
	}

	// componentDidUpdate() {
	//   this.get_token();
	// }

	render() {
		console.log(this.state.userId);
		let nav_info = [
			{ id: 1, title: 'Login', link: '/login' },
			{ id: 2, title: 'Sign up', link: '/signup' },
		];

		const { isLoggedIn, userId, userEmail, userName } = this.state;

		return (
			<BasicInfoContext.Provider
				value={{
					nav_info,
					loggedInState: isLoggedIn,
					handleLog: this.loginStateChanger,
					userId,
				}}
			>
				<Router>
					<div>
						<Route path='/' exact>
							<Home />
						</Route>
						<Route path='/books'>
							<Books />
						</Route>
						<Route path='/notes'>
							<Notes />
						</Route>
						<Route path='/questions'>
							<Questions
								nav_info={nav_info}
								loggedInState={isLoggedIn}
								handleLog={this.loginStateChanger}
								userId={userId}
							/>
						</Route>
						<Route path='/projects'>
							<Projects
								nav_info={nav_info}
								loggedInState={isLoggedIn}
								handleLog={this.loginStateChanger}
								userId={userId}
							/>
						</Route>
						<Route path='/contribute'>
							<Contribute
								nav_info={nav_info}
								loggedInState={isLoggedIn}
								handleLog={this.loginStateChanger}
								userId={userId}
							/>
						</Route>

						<Route path='/login'>
							<Login
								nav_info={nav_info}
								loggedInState={isLoggedIn}
								handleLog={this.loginStateChanger}
								userId={userId}
							/>
						</Route>
						<Route path='/signup'>
							<Signup
								nav_info={nav_info}
								loggedInState={isLoggedIn}
								handleLog={this.loginStateChanger}
								userId={userId}
							/>
						</Route>

						<Route path='/profile/:id'>
							<Profile
								nav_info={nav_info}
								loggedInState={isLoggedIn}
								handleLog={this.loginStateChanger}
								userId={userId}
							/>
						</Route>

						<Route path='/users'>
							<Users
								nav_info={nav_info}
								loggedInState={isLoggedIn}
								handleLog={this.loginStateChanger}
								userId={userId}
							/>
						</Route>
						<Route path='/discussions'>
							<Discussions
								nav_info={nav_info}
								loggedInState={isLoggedIn}
								handleLog={this.loginStateChanger}
								userId={userId}
								userName={this.state.userName}
								userEmail={this.state.userEmail}
							/>
						</Route>
						<Route path='/answers/:discussion_id'>
							<Answers
								nav_info={nav_info}
								loggedInState={isLoggedIn}
								handleLog={this.loginStateChanger}
								userId={userId}
								userName={this.state.useName}
								userEmail={this.state.userEmail}
							/>
						</Route>

						<Route path='/contributions/books/:profileId'>
							<ProfileBooks />
						</Route>
						<Route path='/contributions/notes/:profileId'>
							<ProfileNotes />
						</Route>

						<Route path='/contributions/projects/:profileId'>
							<ProfileProjects />
						</Route>
						<Route path='/contributions/questions/:profileId'>
							<ProfileQuestions />
						</Route>
						<Route path='/contributions/discussions/:profileId'>
							<ProfileDiscussions />
						</Route>
						<Route path='/admin/login'>
							{/* {this.state.isLoggedIn ? (
								<Redirect to='/admin/requests' />
							) : (
								
							)} */}
							<AdminPannel
								loggedInState={this.state.isLoggedIn}
								handleLog={this.loginStateChanger}
							/>
						</Route>
						<Route path='/admin/requests'>
							<RegistrationRequestPage loggedInState={this.state.isLoggedIn} />
						</Route>
					</div>
				</Router>
			</BasicInfoContext.Provider>
		);
	}
}
