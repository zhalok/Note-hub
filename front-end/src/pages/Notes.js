import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SemesterList from '../components/SemesterList';
import Notelist from '../components/Notelist';
import SearchOption from '../components/SearchOption';
import Img from '../images/signup.jpg';
import noteImg from '../images/pencil.png';

import '../App.css';
import WaitModalMessage from '../components/WaitModalMessage';
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
console.log(apiURL);

export default class Notes extends Component {
	state = {
		notelist: [],
		noteFetched: false,
		showWaitModal: true,
	};

	find_all_notes = async () => {
		try {
			const response = await fetch(`${apiURL}/notes/get_all/`);
			const data = await response.json();
			console.log(data);
			this.setState({
				notelist: data,
				noteFetched: true,
				showWaitModal: false,
			});
		} catch (err) {
			console.log(err);
		}
	};

	find_notes_by_semester = async (semester) => {
		try {
			const response = await fetch(`${apiURL}/notes/semester/${semester}`);

			const data = await response.json();
			// console.log(data);

			if (data == 'No data has been found') {
				this.setState({
					notelist: [{ name: 'NoData' }],
				});
			} else {
				this.setState({
					notelist: data,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	find_note_by_name = (name) => {
		name.trim();
		fetch(` ${apiURL}/notes/get_by_name/${name}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					notelist: data,
					showSearchResult: true,
				});
			});
	};

	controller = (e) => {
		this.find_notes_by_semester(e.target.value);
	};

	findBynameController = (name) => {
		this.find_note_by_name(name);
	};

	componentDidMount() {
		this.find_all_notes();
	}

	render() {
		const { notelist, noteFetched } = this.state;

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
						<h1 style={{ color: 'white' }}>Notes</h1>
						<SearchOption findByNameController={this.findBynameController} />
					</div>
					<hr className='hr-style' />
					<div className='total-page'>
						<SemesterList controller={this.controller} />
						<div className='contents'>
							<Notelist
								notelist={notelist}
								noteFetched={noteFetched}
								noteImg={noteImg}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
