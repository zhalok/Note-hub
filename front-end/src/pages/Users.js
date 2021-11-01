import React from 'react';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import Img from '../images/signup.jpg';
import UserPopUp from '../components/UserPopUp';
import UserList from '../components/UserList';

export default class Users extends React.Component {
	state = {
		users: [],
	};

	fetchUsers = () => {
		fetch(' https://peaceful-river-14379.herokuapp.com/users/get_all')
			.then((response) => response.json())
			.then((data) => {
				this.setState({ users: data });
				console.log(this.state.users);
			});
	};

	componentDidMount() {
		this.fetchUsers();
	}

	render() {
		// const { info } = this.props;
		var sectionStyle = {
			backgroundImage: `url(${Img})`,
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '10px',
		};
		let userInfo;
		if (this.state.users.length == 0) {
			userInfo = <div>No Users</div>;
		} else {
			userInfo = <UserList userInfo={this.state.users} />;
		}

		const { nav_info } = this.props;
		return (
			<div className='ht' style={sectionStyle}>
				<Navbar nav_link={nav_info} />
				<div style={{ marginTop: '100px' }}>{userInfo}</div>
			</div>
		);
	}
}
