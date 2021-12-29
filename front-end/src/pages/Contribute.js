import React, { Component } from 'react';

import ContributeForm from '../components/forms/ContributeForm';
import ContributeCredential from '../components/others/ContributeCredential';
import Navbar from '../components/others/Navbar';

import Img from '../images/login.png';

import '../App.css';
import BasicInfoContext from '../Contexts/BasicInfoContext';
import SideNavbarDrawer from '../components/others/SideNavDrawer';

var sectionStyle = {
	backgroundColor: `#8bbaf7`,
};

const apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';

export default class extends Component {
	render() {
		const { nav_info, loggedInState, handleLog, userId } = this.props;

		let contribute;
		if (loggedInState) {
			contribute = <ContributeForm userId={userId} />;
		} else {
			contribute = <ContributeCredential />;
		}

		return (
			<div style={sectionStyle} className='ht'>
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

				<div className='container'>
					<h1 style={{ color: 'black' }}>Contribute</h1>
					<hr className='hr-style' />
					{contribute}
				</div>
			</div>
		);
	}
}
