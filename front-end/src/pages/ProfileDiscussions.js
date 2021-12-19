import React, { Component, useEffect, useState } from 'react';

import Navbar from '../components/others/Navbar';
import DiscussionList from '../components/lists/DiscussionList';
import SearchOption from '../components/others/SearchOption';
import SemesterList from '../components/lists/SemesterList';
import WaitModalMessage from '../components/messages/WaitModalMessage';
import bookImg from '../images/books.png';

import '../App.css';
import BasicInfoContext from '../Contexts/BasicInfoContext';
import { useParams } from 'react-router';

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

const ProfileBooks = () => {
	// booklist: [],
	// bookFetched: false,
	// showWaitMessage: true,
	// reload: 0,
	const [discussionList, setDiscussionList] = useState([]);
	const [discussionFetched, setDiscussionFetched] = useState(false);
	const [showWaitMessage, setShowWaitMessage] = useState(false);
	const { profileId } = useParams();

	const find_discussions_by_userId = () => {
		setShowWaitMessage(true);
		fetch(
			`http://localhost:5000/discussions/get_discussion_by_contributor_id/${profileId}`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setDiscussionList(data);
				setShowWaitMessage(false);
				setDiscussionFetched(true);
			})
			.catch();
	};

	const delete_discussion = (discussion_id) => {
		fetch(`http://localhost:5000/discussions/${discussion_id}`, {
			method: 'delete',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				find_discussions_by_userId();
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		find_discussions_by_userId();
	}, []);

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

				<WaitModalMessage show={showWaitMessage} />

				<div className='container mt-5 pt-4'>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<h1 style={{ color: 'white' }}>{profileId}/Discussions</h1>
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
							<DiscussionList
								discussions={discussionList}
								discussionFetched={discussionFetched}
								discussionImg={bookImg}
								deleteDiscussion={(discussionId) => {
									delete_discussion(discussionId);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileBooks;
