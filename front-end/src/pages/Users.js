import React from 'react';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import Img from '../images/signup.jpg';
// import UserPopUp from '../components/UserPopUp';
import UserList from '../components/UserList';
import WaitModalMessage from '../components/WaitModalMessage';

const apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';

export default class Users extends React.Component {
	state = {
		users: [],
		showWaitModal: true,
	};

	fetchUsers = () => {
		fetch(` ${apiURL}/users/get_all`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ users: data, showWaitModal: false });
			});
	};

	componentDidMount() {
		this.fetchUsers();
	}

	render() {
		// const { info } = this.props;
		var sectionStyle = {
			backgroundSize: 'cover',
			padding: '10px',
			backgroundColor: '#02242c',
		};
		let userInfo;
		if (this.state.users.length == 0) {
			userInfo = <div>No Users</div>;
		} else {
			userInfo = <UserList userInfo={this.state.users} />;
		}

		const { nav_info, loggedInState, handleLog, userId } = this.props;
		return (
			<div className='ht' style={sectionStyle}>
				<Navbar
					nav_link={nav_info}
					loggedInState={loggedInState}
					handleLog={handleLog}
					userId={userId}
				/>
				<WaitModalMessage show={this.state.showWaitModal} />
				<div className='container mt-5 pt-5'>
					<h1 style={{ color: 'white' }}>Contributors</h1>
					<hr className='hr-style' />
					{userInfo}
				</div>
			</div>
		);
	}
}
