import React from 'react';
import Navbar from '../components/others/Navbar';

// import UserPopUp from '../components/UserPopUp';
import UserList from '../components/lists/UserList';
import WaitModalMessage from '../components/messages/WaitModalMessage';
import BasicInfoContext from '../Contexts/BasicInfoContext';
import SideNavbarDrawer from '../components/others/SideNavDrawer';

let apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';

// apiURL = 'http://localhost:5000';

export default class Users extends React.Component {
	state = {
		users: [],
		showWaitModal: true,
	};

	fetchUsers = () => {
		fetch(` ${apiURL}/users/get_all`)
			.then((response) => response.json())
			.then((data) => {
				data.reverse();
				const _users = [];
				while (data.length) {
					_users.push(data.splice(0, 2));
				}
				this.setState({ users: _users, showWaitModal: false });
			})
			.catch((err) => console.log(err));
	};

	componentDidMount() {
		this.fetchUsers();
	}

	render() {
		// const { info } = this.props;
		var sectionStyle = {
			backgroundSize: 'cover',
			padding: '10px',
			backgroundColor: '#8bbaf7',
		};
		let userInfo;
		console.log(this.state.users);
		userInfo = <UserList userInfo={this.state.users} />;

		const { nav_info, loggedInState, handleLog, userId } = this.props;
		return (
			<div className='ht' style={sectionStyle}>
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

				<div className='container mt-5 pt-5'>
					<h1 style={{ color: 'black' }}>Contributors</h1>
					<hr className='hr-style' />
					{userInfo}
				</div>
				<WaitModalMessage show={this.state.showWaitModal} />
			</div>
		);
	}
}
