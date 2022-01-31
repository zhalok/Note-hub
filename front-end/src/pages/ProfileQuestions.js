import React, { Component, useEffect, useState } from 'react';

import Navbar from '../components/others/Navbar';
import Questionlist from '../components/lists/Questionlist';
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

const ProfileQuestions = () => {
	// booklist: [],
	// bookFetched: false,
	// showWaitMessage: true,
	// reload: 0,
	const [questionList, setQuestionList] = useState([]);
	const [questionFetched, setQuestionFetched] = useState(false);
	const [showWaitMessage, setShowWaitMessage] = useState(false);
	const { profileId } = useParams();

	const find_questions_by_userId = () => {
		// setShowWaitMessage(true);
		fetch(
			`http://localhost:5000/questions/get_question_by_contributor_id/${profileId}`
		)
			.then((res) => res.json())
			.then((data) => {
				data.reverse();
				// console.log(data);
				setQuestionList(data);
				setShowWaitMessage(false);
				setQuestionFetched(true);
			})
			.catch();
	};

	const delete_question = (question_id) => {
		fetch(`http://localhost:5000/questions/${question_id}`, {
			method: 'delete',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				find_questions_by_userId();
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		find_questions_by_userId();
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
						<h1 style={{ color: 'black' }}>{profileId}/Questions</h1>
					</div>

					<hr className='hr-style' />
					<div className='total-page'>
						<div
							className='contents'
							style={{ marginLeft: 'auto', marginRight: 'auto' }}
						>
							<Questionlist
								questionlist={questionList}
								questionFetched={questionFetched}
								questionImg={bookImg}
								deleteQuestion={(questionId) => {
									delete_question(questionId);
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

export default ProfileQuestions;
