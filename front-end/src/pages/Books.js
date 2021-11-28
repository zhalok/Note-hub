import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Booklist from '../components/Booklist';
import SearchOption from '../components/SearchOption';
import SemesterList from '../components/SemesterList';
import WaitModalMessage from '../components/WaitModalMessage';
import bookImg from '../images/books.png';

import '../App.css';
import BasicInfoContext from '../Contexts/BasicInfoContext';

var sectionStyle = {
	backgroundSize: 'cover',
	padding: '10px',
	backgroundColor: '#02242c',
};

let apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';

console.log(apiURL);

// apiURL = 'http://localhost:5000';

export default class Books extends Component {
	state = {
		booklist: [],
		bookFetched: false,
		showWaitMessage: true,
	};

	find_all_books = async () => {
		try {
			const response = await fetch(`${apiURL}/books/get_all/`);
			const data = await response.json();
			console.log(data);
			this.setState({
				booklist: data,
				bookFetched: true,
				showWaitMessage: false,
			});
			console.log(this.state.booklist);
		} catch (err) {
			console.log(err);
		}
	};

	find_book_by_semester = async (semester) => {
		try {
			const response = await fetch(` ${apiURL}/books/semester/` + semester);

			const data = await response.json();
			// console.log(data);

			this.setState({
				booklist: data,
			});
		} catch (err) {
			console.log(err);
		}
	};

	find_book_by_name = (name) => {
		name.trim();
		fetch(`${apiURL}/books/get_by_name/${name}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					booklist: data,
					showSearchResult: true,
				});
			});
	};

	componentDidMount() {
		console.log(this.props.userId);
		this.find_all_books();
	}

	controller = (e) => {
		this.find_book_by_semester(e.target.value);
	};

	findBynameController = (name) => {
		this.find_book_by_name(name);
	};

	render() {
		const { nav_info, loggedInState, handleLog, userId } = this.props;
		const { booklist, showSearchResult, bookFetched } = this.state;

		return (
			<div>
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

					<WaitModalMessage show={this.state.showWaitMessage} />

					<div className='container mt-5 pt-4'>
						<div style={{ display: 'flex', flexDirection: 'row' }}>
							<h1 style={{ color: 'white' }}>Books</h1>
							<SearchOption findByNameController={this.findBynameController} />
						</div>

						<hr className='hr-style' />
						<div className='total-page'>
							<SemesterList controller={this.controller} />
							<div className='contents'>
								<Booklist
									booklist={booklist}
									bookFetched={bookFetched}
									bookImg={bookImg}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
