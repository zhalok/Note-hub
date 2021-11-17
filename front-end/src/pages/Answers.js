import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnswerList from '../components/AnswerList';
import Navbar from '../components/Navbar';

const Answers = (props) => {
	const { nav_info, loggedInState, handleLog, userId } = props;

	const [answerList, setAnswerList] = useState([]);

	const { discussion_id } = useParams([]);

	console.log(discussion_id);

	useEffect(() => {
		if (discussion_id) {
			fetch(`http://localhost:5000/answer/${discussion_id}`)
				.then((res) => res.json())
				.then((data) => {
					setAnswerList(data);
					console.log('data fetched');
					console.log(data);
				})
				.catch((err) => console.log(err));
		}
	}, [props, discussion_id]);

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

				<div className='container mt-5 pt-4'>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<h1 style={{ color: 'white' }}>All answers</h1>
					</div>

					<hr className='hr-style' />
					<div className='total-page'>
						<div className='contents'>
							<AnswerList answerList={answerList} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Answers;
