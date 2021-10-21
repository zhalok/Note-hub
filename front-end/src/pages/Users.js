import React from 'react';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import Img from '../images/signup.jpg';
import UserPopUp from '../components/UserPopUp';

export default class Users extends React.Component {
	render() {
		const { info } = this.props;
		var sectionStyle = {
			backgroundImage: `url(${Img})`,
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '10px',
		};
		const { nav_info } = this.props;
		return (
			<div className='ht' style={sectionStyle}>
				<Navbar nav_link={nav_info} />
				{/* <UserCard /> */}
				<UserPopUp info={info} />
			</div>
		);
	}
}
