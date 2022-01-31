import React, { Component, useEffect, useState } from 'react';

import Navbar from '../components/others/Navbar';
import Booklist from '../components/lists/Booklist';
import SearchOption from '../components/others/SearchOption';
import SemesterList from '../components/lists/SemesterList';
import WaitModalMessage from '../components/messages/WaitModalMessage';
import bookImg from '../images/books.png';

import '../App.css';
import BasicInfoContext from '../Contexts/BasicInfoContext';
import { useParams } from 'react-router';
import SideNavbarDrawer from '../components/others/SideNavDrawer';

var sectionStyle = {
	backgroundSize: 'cover',
	padding: '10px',
	backgroundColor: '#8bbaf7',
};

let apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';

console.log(apiURL);

// apiURL = 'http://localhost:5000';

const ProfileBooks = () => {
	// booklist: [],
	// bookFetched: false,
	// showWaitMessage: true,
	// reload: 0,
	const [bookList, setBookList] = useState([]);
	const [bookFetched, setBookFetched] = useState(false);
	const [showWaitMessage, setShowWaitMessage] = useState(false);
	const { profileId } = useParams();

	const find_books_by_userId = () => {
		setShowWaitMessage(true);
		fetch(`http://localhost:5000/books/get_book_by_contributor_id/${profileId}`)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				data.reverse();
				setBookList(data);
				setShowWaitMessage(false);
				setBookFetched(true);
			})
			.catch();
	};

	const delete_book = (book_id) => {
		fetch(`http://localhost:5000/books/${book_id}`, {
			method: 'delete',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				find_books_by_userId();
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		find_books_by_userId();
	}, []);

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

				<div className='container mt-5 pt-4'>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<h1 style={{ color: 'black' }}>{profileId}/Books</h1>
						{/* <SearchOption findByNameController={this.findBynameController} /> */}
					</div>

					<hr className='hr-style' />
					<div className='total-page'>
						<div
							className='contents'
							style={{
								display: 'flex',
								marginLeft: 'auto',
								marginRight: 'auto',
							}}
						>
							<Booklist
								booklist={bookList}
								bookFetched={bookFetched}
								bookImg={bookImg}
								deleteBook={(bookId) => {
									delete_book(bookId);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<WaitModalMessage show={showWaitMessage} />
		</div>
	);
};

export default ProfileBooks;
