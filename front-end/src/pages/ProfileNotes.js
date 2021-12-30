import React, { Component, useEffect, useState } from 'react';

import Navbar from '../components/others/Navbar';
import Notelist from '../components/lists/Notelist';
import SearchOption from '../components/others/SearchOption';
import SemesterList from '../components/lists/SemesterList';
import WaitModalMessage from '../components/messages/WaitModalMessage';
import noteImg from '../images/pencil.png';

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
	const [noteList, setNoteList] = useState([]);
	const [noteFetched, setNoteFetched] = useState(false);
	const [showWaitMessage, setShowWaitMessage] = useState(false);
	const { profileId } = useParams();

	const find_notes_by_userId = () => {
		setShowWaitMessage(true);
		fetch(`http://localhost:5000/notes/get_note_by_contributor_id/${profileId}`)
			.then((res) => res.json())
			.then((data) => {
				data.reverse();
				// console.log(data);
				setNoteList(data);
				setShowWaitMessage(false);
				setNoteFetched(true);
			})
			.catch();
	};

	const delete_note = (note_id) => {
		fetch(`http://localhost:5000/notes/${note_id}`, {
			method: 'delete',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				find_notes_by_userId();
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		find_notes_by_userId();
	}, []);

	return (
		<div>
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
						<h1 style={{ color: 'black' }}>{profileId}/Notes</h1>
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
							<Notelist
								notelist={noteList}
								noteFetched={noteFetched}
								noteImg={noteImg}
								deleteNote={(noteId) => {
									delete_note(noteId);
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
