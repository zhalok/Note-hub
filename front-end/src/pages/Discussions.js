import React, { useEffect, useState } from 'react';
import SearchOption from '../components/SearchOption';
import Navbar from '../components/Navbar';
import DiscussionCard from '../components/DiscussionCard';
import DiscussionList from '../components/DiscussionList';
import Button from 'react-bootstrap/Button';
import NewDiscussionForm from '../components/NewDiscussionForm';

export default function Discussions({
	nav_info,
	loggedInState,
	handleLog,
	userId,
}) {
	var sectionStyle = {
		backgroundSize: 'cover',
		padding: '10px',
		backgroundColor: '#02242c',
	};

	const [show, setShow] = useState(false);

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
								show={show}
								onHide={() => {
									setShow(false);
								}}
							/>
							<DiscussionList
								discussion_list={[
									{
										title: 'Request for DS book',
										body: 'Can anyone give me the data structure book recommended for 1/2 semester?',
										discussion_starters_name: 'Kaifa Tabassum',
										discussion_starters_email: 'kaifatabassum2@gmail.com',
										discussion_starting_time: Date.now().toLocaleString(),
										votes: 0,
									},
								]}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
