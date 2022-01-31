import React, { Component } from 'react';

import Navbar from '../components/others/Navbar';
import Booklist from '../components/lists/Booklist';
import SearchOption from '../components/others/SearchOption';
import SemesterList from '../components/lists/SemesterList';
import WaitModalMessage from '../components/messages/WaitModalMessage';
import bookImg from '../images/books.png';

import '../App.css';
import BasicInfoContext from '../Contexts/BasicInfoContext';
import SideNavbarDrawer from '../components/others/SideNavDrawer';

var sectionStyle = {
	backgroundSize: 'cover',

	backgroundColor: '#8bbaf7',
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
		reload: 0,
	};

	find_all_books = async () => {
		try {
			const response = await fetch(`${apiURL}/books/get_all/`);
			const data = await response.json();
			//
			data.reverse();
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

	delete_book = (book_id) => {
		this.setState({
			showWaitMessage: true,
		});
		fetch(`https://notehubapi.herokuapp.com/books/${book_id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);

				this.find_all_books();
				this.setState({
					showWaitMessage: false,
				});
			})
			.catch((err) => console.log(err));
	};

	componentDidMount() {
		console.log(this.props.userId);
		this.find_all_books();
	}

	// componentDidUpdate() {
	// 	this.find_all_books();
	// }

	controller = (e) => {
		this.find_book_by_semester(e.target.value);
	};

	findBynameController = (name) => {
		this.find_book_by_name(name);
	};

	render() {
		const { booklist, showSearchResult, bookFetched } = this.state;
		console.log(this.state.reload);
		return (
			<div>
				<div className='ht'>
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
							<h1 style={{ color: 'black' }}>Books</h1>
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
									deleteBook={(bookId) => {
										this.delete_book(bookId);
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				<WaitModalMessage show={this.state.showWaitMessage} />
			</div>
		);
	}
}
