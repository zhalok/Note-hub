import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Projectlist from '../components/Projectlist';
import Img from '../images/signup.jpg';
import SearchOption from '../components/SearchOption';

import '../App.css';
import SemesterList from '../components/SemesterList';

var sectionStyle = {
	backgroundImage: `url(${Img})`,
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	padding: '10px',
};

export default class Projects extends Component {
	state = {
		projectlist: [],
	};

	find_all_projects = async () => {
		try {
			const response = await fetch(
				' https://peaceful-river-14379.herokuapp.com/projects/get_all/'
			);
			const data = await response.json();

			this.setState({
				projectlist: data,
			});
		} catch (err) {
			console.log(err);
		}
	};

	find_projects_by_semester = async (semester) => {
		try {
			const response = await fetch(
				'http://localhost:5000/projects/semester/' + semester
			);

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
		fetch(`http://localhost:5000/projects/get_by_name/${name}`)
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
		const { projectlist } = this.state;

		return (
			<div style={sectionStyle} className='ht'>
				<Navbar
					nav_link={nav_info}
					loggedInState={loggedInState}
					handleLog={handleLog}
					userId={userId}
				/>
				<div className='container mt-5 pt-4'>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<h1 style={{ color: 'white' }}>Projects</h1>
						<SearchOption findByNameController={this.findBynameController} />
					</div>
					<hr className='hr-style' />
					<div className='total-page'>
						<SemesterList controller={this.controller} />
						<div className='contents'>
							<Projectlist projectlist={projectlist} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
