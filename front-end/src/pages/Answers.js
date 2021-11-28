import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnswerList from '../components/AnswerList';
import Navbar from '../components/Navbar';
import WaitModalMessage from '../components/WaitModalMessage';

const Answers = (props) => {
	const { nav_info, loggedInState, handleLog, userId } = props;

	const [answerList, setAnswerList] = useState([]);

	const [showWaitMessage, setShowWaitMessage] = useState(true);

	const [fetched, setFetched] = useState(false);

	const { discussion_id } = useParams([]);

	const [update, setUpdate] = useState({});

	useEffect(() => {
		if (discussion_id) {
			setShowWaitMessage(true);
			fetch(`https://notehubapi.herokuapp.com/answers/${discussion_id}`)
				.then((res) => res.json())
				.then((data) => {
					setAnswerList(data);
					setShowWaitMessage(false);
					setFetched(true);
				})
				.catch((err) => console.log(err));
		}
	}, [discussion_id, update]);

	var sectionStyle = {
		backgroundSize: 'cover',
		padding: '10px',
		backgroundColor: '#02242c',
	};
	console.log(answerList);
	return (
		<div>
			<div style={sectionStyle} className='ht'>
				<Navbar
					nav_link={nav_info}
					loggedInState={loggedInState}
					handleLog={handleLog}
					userId={userId}
				/>

				<WaitModalMessage show={showWaitMessage} />

				<div className='container mt-5 pt-4'>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<h1 style={{ color: 'white' }}>All answers</h1>
					</div>

					<hr className='hr-style' />
					<div className='total-page'>
						<div className='contents'>
							<AnswerList
								answerList={answerList}
								waitModalMessage={WaitModalMessage}
								setShowWaitMessage={setShowWaitMessage}
								fetched={fetched}
								userId={userId}
								loggedInState={loggedInState}
								setUpdate={setUpdate}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Answers;
