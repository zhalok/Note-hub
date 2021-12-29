import React, { Component } from 'react';

import Navbar from '../components/others/Navbar';
import Projectlist from '../components/lists/Projectlist';
import Img from '../images/signup.jpg';
import SearchOption from '../components/others/SearchOption';
import WaitModalMessage from '../components/messages/WaitModalMessage';

import '../App.css';
import SemesterList from '../components/lists/SemesterList';
import BasicInfoContext from '../Contexts/BasicInfoContext';
import projectImg from '../images/flowchart.png';
import SideNavbarDrawer from '../components/others/SideNavDrawer';

var sectionStyle = {
	backgroundSize: 'cover',
	padding: '10px',
	backgroundColor: '#8bbaf7',
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

	delete_project = (project_id) => {
		this.setState({
			showWaitModal: true,
		});
		fetch(`https://notehubapi.herokuapp.com/projects/${project_id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				this.find_all_projects();
				this.setState({
					showWaitModal: false,
				});
			})
			.catch((err) => console.log(err));
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
						<SideNavbarDrawer
							nav_link={nav_info}
							loggedInState={loggedInState}
							handleLog={handleLog}
							userId={userId}
						/>
					)}
				</BasicInfoContext.Consumer>

				<div className='container mt-5 pt-4'>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<h1 style={{ color: 'black' }}>Projects</h1>
						<SearchOption findByNameController={this.findBynameController} />
					</div>
					<hr className='hr-style' />
					<div className='total-page'>
						<SemesterList controller={this.controller} />
						<div className='contents'>
							<Projectlist
								projectlist={projectlist}
								projectFetched={projectFetched}
								projectImg={projectImg}
								deleteProject={(project_id) => {
									this.delete_project(project_id);
								}}
							/>
						</div>
					</div>
				</div>
				<WaitModalMessage show={this.state.showWaitModal} />
			</div>
		);
	}
}
