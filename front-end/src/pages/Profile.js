import React, { Component } from 'react';
import ProfileInfo from '../components/ProfileInfo';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router';
import { Route } from 'react-router-dom';
import Data from '../ProfileData.json';

import Img from '../images/login.png';
import Img1 from '../images/icon.png';

import '../App.css';

var sectionStyle = {
	backgroundColor: '#02242c',
};

export default class Profile extends Component {
	render() {
		const { nav_info, loggedInState, handleLog, userId, path } = this.props;

		return (
			<div style={sectionStyle} className='ht'>
				<Navbar
					nav_link={nav_info}
					loggedInState={loggedInState}
					handleLog={handleLog}
					userId={userId}
				/>

				<Route path={path} component={ProfileInfo}></Route>
			</div>
		);
	}
}
