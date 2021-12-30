import React, { Component } from 'react';

import Navbar from '../components/others/Navbar';
import Questionlist from '../components/lists/Questionlist';
import Img from '../images/signup.jpg';
import SemesterList from '../components/lists/SemesterList';
import SearchOption from '../components/others/SearchOption';
import WaitModalMessage from '../components/messages/WaitModalMessage';
import questionImg from '../images/exam.png';

import '../App.css';
import BasicInfoContext from '../Contexts/BasicInfoContext';
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

export default class Questions extends Component {
	state = {
		questionlist: [],
		questionFetched: false,
		showWaitModal: true,
	};

	find_all_questions = async () => {
		try {
			const response = await fetch(`${apiURL}/questions/get_all/`);
			const data = await response.json();

			this.setState({
				questionlist: data,
				questionFetched: true,
				showWaitModal: false,
			});
		} catch (err) {
			console.log(err);
		}
	};

	find_questions_by_semester = async (semester) => {
		try {
			const response = await fetch(`${apiURL}/questions/semester/` + semester);

			const data = await response.json();

			this.setState({
				questionlist: data,
			});
		} catch (err) {
			console.log(err);
		}
	};

	find_question_by_name = (name) => {
		name.trim();
		fetch(`${apiURL}/questions/get_by_name/${name}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					notelist: data,
					showSearchResult: true,
				});
			});
	};
	delete_question = (question_id) => {
		this.setState({
			showWaitModal: true,
		});
		fetch(`https://notehubapi.herokuapp.com/questions/${question_id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				data.reverse();
				this.find_all_questions();
				this.setState({
					showWaitModal: false,
				});
			})
			.catch((err) => console.log(err));
	};

	controller = (e) => {
		this.find_questions_by_semester(e.target.value);
	};

	findBynameController = (name) => {
		this.find_question_by_name(name);
	};

	componentDidMount() {
		this.find_all_questions();
	}

	render() {
		const { nav_info, loggedInState, handleLog, userId } = this.props;
		const { questionlist, questionFetched } = this.state;

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
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<h1 style={{ color: 'black' }}>Questions</h1>
						<SearchOption findByNameController={this.findBynameController} />
					</div>
					<hr className='hr-style' />
					<div className='total-page'>
						<SemesterList controller={this.controller} />
						<div className='contents'>
							<Questionlist
								questionlist={questionlist}
								questionFetched={questionFetched}
								questionImg={questionImg}
								deleteQuestion={(question_id) => {
									this.delete_question(question_id);
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
