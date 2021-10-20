import React from 'react';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import Img from '../images/signup.jpg';

export default class Users extends React.Component {
	render() {
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
				<UserCard />
			</div>
		);
	}
}
