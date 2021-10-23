import React from 'react';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import Img from '../images/signup.jpg';
import UserPopUp from '../components/UserPopUp';
import UserList from '../components/UserList';

export default class Users extends React.Component {
	state = {
		users: [
			{
				name: 'Zhalok Rahman',
				session: '2018-19',
				phone: '01716922067',
				email: 'zhalokrahman007@gmail.com',
			},
		],
	};

	fetchUsers = () => {
		fetch('http://localhost:5000/users/get_all')
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
		const { info } = this.props;
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
				{/* <div style={{ marginTop: '100px' }}>{userInfo}</div> */}
				<UserList userInfo={this.state.users} />
			</div>
		);
	}
}
