import React, { Component, useEffect, useState } from 'react';

import Navbar from '../components/others/Navbar';
import Answerlist from '../components/lists/Answerlist';
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

const ProfileAnswers = () => {
	// booklist: [],
	// bookFetched: false,
	// showWaitMessage: true,
	// reload: 0,
	const [answerList, setAnswerList] = useState([]);
	const [answerFetched, setAnswerFetched] = useState(false);
	const [showWaitMessage, setShowWaitMessage] = useState(false);
	const { profileId } = useParams();

	const find_answers_by_userId = () => {
		setShowWaitMessage(true);
		fetch(`http://localhost:5000/answers/get_answer_by_contributor_id/${profileId}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setAnswerList(data);
				setShowWaitMessage(false);
				setAnswerFetched(true);
			})
			.catch();
	};

	const delete_answer = (answer_id) => {
		fetch(`http://localhost:5000/answers/${answer_id}`, {
			method: 'delete',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				find_answers_by_userId();
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		find_answers_by_userId();
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
						<h1 style={{ color: 'white' }}>{profileId}/Answers</h1>
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
							<Answerlist
								answerlist={answerList}
								answerFetched={answerFetched}
								answerImg={bookImg}
								deleteAnswer={(answerId) => {
									delete_answer(answerId);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileAnswers;
