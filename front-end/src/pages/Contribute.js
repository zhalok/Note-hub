import React, { Component } from 'react';

import ContributeForm from '../components/ContributeForm';
import ContributeCredential from '../components/ContributeCredential';
import Navbar from '../components/Navbar';

import Img from '../images/login.png';

import '../App.css';
import BasicInfoContext from '../Contexts/BasicInfoContext';

var sectionStyle = {
	backgroundColor: `#02242c`,
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
						<Navbar
							nav_link={nav_info}
							loggedInState={loggedInState}
							handleLog={handleLog}
							userId={userId}
						/>
					)}
				</BasicInfoContext.Consumer>

				<div className='container mt-5 pt-5'>
					<h1 style={{ color: 'white' }}>Contribute</h1>
					<hr className='hr-style' />
					{contribute}
				</div>
			</div>
		);
	}
}
