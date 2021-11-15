import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

import './App.css';

export default class App extends Component {
	state = {
		isLoggedIn: false,
		userId: '',
		useName: '',
		userEmail: '',
	};

	get_token() {
		const token = JSON.parse(sessionStorage.getItem('token'));

		if (token) {
			// console.log(token.user);
			this.setState({
				isLoggedIn: true,
				userId: token.user,
			});
			fetch(`http://localhost:5000/users/id/${this.state.userId}`)
				.then((res) => res.json())
				.then((data) =>
					this.setState({
						userName: data[0].name,
						userEmail: data[0].email,
					})
				)
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
	}

	// componentDidUpdate() {
	//   this.get_token();
	// }

	render() {
		let nav_info = [
			{ id: 1, title: 'Login', link: '/login' },
			{ id: 2, title: 'Sign up', link: '/signup' },
		];

		const { isLoggedIn, userId } = this.state;
		console.log(userId);

		return (
			<Router>
				<div>
					<Route path='/' exact>
						<Home
							nav_info={nav_info}
							loggedInState={isLoggedIn}
							handleLog={this.loginStateChanger}
							userId={userId}
						/>
					</Route>
					<Route path='/books'>
						<Books
							nav_info={nav_info}
							loggedInState={isLoggedIn}
							handleLog={this.loginStateChanger}
							userId={userId}
						/>
					</Route>
					<Route path='/notes'>
						<Notes
							nav_info={nav_info}
							loggedInState={isLoggedIn}
							handleLog={this.loginStateChanger}
							userId={userId}
						/>
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
					<Switch>
						<Route path='/profile/:id'>
							<Profile
								nav_info={nav_info}
								loggedInState={isLoggedIn}
								handleLog={this.loginStateChanger}
								userId={userId}
								path='/profile/:id'
							/>
						</Route>
					</Switch>
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
				</div>
			</Router>
		);
	}
}
