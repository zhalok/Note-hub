import React, { useEffect, useState } from 'react';
import SearchOption from '../components/SearchOption';
import Navbar from '../components/Navbar';
import DiscussionCard from '../components/DiscussionCard';
import DiscussionList from '../components/DiscussionList';
import Button from 'react-bootstrap/Button';
import NewDiscussionForm from '../components/NewDiscussionForm';

const getData = (setUserDetails, userId) => {
	fetch(`http://localhost:5000/users/id/${userId}`)
		.then((res) => res.json())
		.then((data) => {
			setUserDetails(data[0]);
			console.log(data[0]);
		})
		.catch((err) => console.log(err));
};

export default function Discussions(props) {
	const [userDetails, setUserDetails] = useState({});
	const [discussions, setDiscussions] = useState([]);
	const [changer, setChanger] = useState({});

	const { nav_info, loggedInState, handleLog, userId } = props;

	useEffect(() => {
		fetch('http://localhost:5000/discussions/get_all')
			.then((res) => res.json())
			.then((data) => setDiscussions(data))
			.catch((err) => console.log(err));
	}, [changer]);

	useEffect(() => {
		fetch(`http://localhost:5000/users/id/${userId}`)
			.then((res) => res.json())
			.then((data) => setUserDetails(data[0]))
			.catch((err) => console.log(err));
	}, [props]);

	var sectionStyle = {
		backgroundSize: 'cover',
		padding: '10px',
		backgroundColor: '#02242c',
	};

	const [show, setShow] = useState(false);

	if (userDetails) {
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
							<h1 style={{ color: 'white' }}>Discussions</h1>
						</div>

						<hr className='hr-style' />

						<div className='total-page'>
							<div style={{ width: '100%' }}>
								<Button
									variant='success'
									style={{
										display: 'flex',

										width: 'fit-content',
										marginLeft: 'auto',
										marginBottom: '30px',
									}}
									onClick={() => {
										setShow(true);
									}}
								>
									Start Discussion
								</Button>
								<NewDiscussionForm
									setChanger={(e) => {
										setChanger(e);
									}}
									discussionStartersName={userDetails.name}
									discussionStartersEmail={userDetails.email}
									show={show}
									onHide={() => {
										setShow(false);
									}}
									loggedInState={loggedInState}
								/>
								<DiscussionList discussions={discussions} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <div>Wait bhai wait</div>;
	}
}
