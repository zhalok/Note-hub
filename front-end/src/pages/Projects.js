import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Projectlist from '../components/Projectlist';
import Img from '../images/signup.jpg';
import SearchOption from '../components/SearchOption';
import WaitModalMessage from '../components/WaitModalMessage';

import '../App.css';
import SemesterList from '../components/SemesterList';
import BasicInfoContext from '../Contexts/BasicInfoContext';

var sectionStyle = {
	backgroundSize: 'cover',
	padding: '10px',
	backgroundColor: '#02242c',
};

const apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';

export default class Projects extends Component {
	state = {
		projectlist: [],
		projectFetched: false,
		showWaitModal: true,
	};

	find_all_projects = async () => {
		try {
			const response = await fetch(` ${apiURL}/projects/get_all/`);
			const data = await response.json();

			this.setState({
				projectlist: data,
				projectFetched: true,
				showWaitModal: false,
			});
		} catch (err) {
			console.log(err);
		}
	};

	find_projects_by_semester = async (semester) => {
		try {
			const response = await fetch(`${apiURL}/projects/semester/` + semester);

			const data = await response.json();

			this.setState({
				projectlist: data,
			});
		} catch (err) {
			console.log(err);
		}
	};

	find_project_by_name = (name) => {
		name.trim();
		fetch(`${apiURL}/projects/get_by_name/${name}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					booklist: data,
					showSearchResult: true,
				});
			});
	};

	controller = (e) => {
		this.find_projects_by_semester(e.target.value);
	};

	findBynameController = (name) => {
		this.find_project_by_name(name);
	};

	componentDidMount() {
		this.find_all_projects();
	}

	render() {
		const { nav_info, loggedInState, handleLog, userId } = this.props;
		const { projectlist, projectFetched } = this.state;

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

				<WaitModalMessage show={this.state.showWaitModal} />
				<div className='container mt-5 pt-4'>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<h1 style={{ color: 'white' }}>Projects</h1>
						<SearchOption findByNameController={this.findBynameController} />
					</div>
					<hr className='hr-style' />
					<div className='total-page'>
						<SemesterList controller={this.controller} />
						<div className='contents'>
							<Projectlist
								projectlist={projectlist}
								projectFetched={projectFetched}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
