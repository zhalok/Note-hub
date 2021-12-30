import React, { useEffect, useState } from 'react';
import SearchOption from '../components/others/SearchOption';
import Navbar from '../components/others/Navbar';

import DiscussionList from '../components/lists/DiscussionList';
import Button from 'react-bootstrap/Button';
import NewDiscussionForm from '../components/forms/NewDiscussionForm';
import NotificationMessage from '../components/messages/NotificationMessage';
import ToastContext from '../Contexts/ToastContext';
import WaitModalMessage from '../components/messages/WaitModalMessage';
import BasicInfoContext from '../Contexts/BasicInfoContext';
import SideNavbarDrawer from '../components/others/SideNavDrawer';

// const getData = (setUserDetails, userId) => {
// 	fetch(`http://localhost:5000/users/id/${userId}`)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			setUserDetails(data[0]);
// 			console.log(data[0]);
// 		})
// 		.catch((err) => console.log(err));
// };

export default function Discussions(props) {
	const [userDetails, setUserDetails] = useState({});
	const [discussions, setDiscussions] = useState([]);
	const [changer, setChanger] = useState({});
	const [showModalMessage, setShowModalMessage] = useState(true);

	const { nav_info, loggedInState, handleLog, userId, userName, userEmail } =
		props;

	useEffect(() => {
		fetch('https://notehubapi.herokuapp.com/discussions/get_all')
			.then((res) => res.json())
			.then((data) => {
				data.reverse();
				setDiscussions(data);
				setShowModalMessage(false);
			})
			.catch((err) => console.log(err));
	}, [changer]);

	const delete_discussion = (discussion_id) => {
		setShowModalMessage(true);
		fetch(`https:///notehubapi.herokuapp.com/discussions/${discussion_id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setShowModalMessage(false);
				setChanger({});
			})
			.catch((err) => console.log(err));
	};

	var sectionStyle = {
		backgroundSize: 'cover',
		padding: '10px',
		backgroundColor: '#8bbaf7',
	};

	const [show, setShow] = useState(false);
	const [showNotificationModal, setShowNotificationModal] = useState(false);
	console.log(userName);

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

				<div className='container'>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<h1 style={{ color: 'black' }}>Discussions</h1>
					</div>

					<hr className='hr-style' />

					<div className='total-page'>
						<div style={{ width: '100%' }}>
							<Button
								variant='primary'
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
								discussionStartersName={userName}
								discussionStartersEmail={userEmail}
								discussionStartersId={userId}
								show={show}
								onHide={() => {
									setShow(false);
								}}
								loggedInState={loggedInState}
							/>

							<NotificationMessage
								showNotificationModal={showNotificationModal}
								setShowNotificationModal={setShowNotificationModal}
							/>
							<ToastContext.Provider
								value={{ showNotificationModal, setShowNotificationModal }}
							>
								<DiscussionList
									loggedInState={loggedInState}
									discussions={discussions}
									userName={userName}
									userId={userId}
									deleteDiscussion={delete_discussion}
								/>
							</ToastContext.Provider>
						</div>
					</div>
				</div>
			</div>
			<WaitModalMessage show={showModalMessage} />
		</div>
	);
}
