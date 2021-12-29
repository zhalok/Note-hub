import React, { Component, useEffect, useState } from 'react';

import Navbar from '../components/others/Navbar';
import Projectlist from '../components/lists/Projectlist';
import SearchOption from '../components/others/SearchOption';
import SemesterList from '../components/lists/SemesterList';
import WaitModalMessage from '../components/messages/WaitModalMessage';
import projectImg from '../images/flowchart.png';

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

const Profileprojects = () => {
	// projectlist: [],
	// projectFetched: false,
	// showWaitMessage: true,
	// reload: 0,
	const [projectList, setProjectList] = useState([]);
	const [projectFetched, setProjectFetched] = useState(false);
	const [showWaitMessage, setShowWaitMessage] = useState(false);
	const { profileId } = useParams();

	const find_projects_by_userId = () => {
		setShowWaitMessage(true);
		fetch(
			`http://localhost:5000/projects/get_project_by_contributor_id/${profileId}`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProjectList(data);
				setShowWaitMessage(false);
				setProjectFetched(true);
			})
			.catch();
	};

	const delete_project = (project_id) => {
		fetch(`http://localhost:5000/projects/${project_id}`, {
			method: 'delete',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				find_projects_by_userId();
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		find_projects_by_userId();
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
						<h1 style={{ color: 'black' }}>{profileId}/Projects</h1>
						{/* <SearchOption findByNameController={this.findBynameController} /> */}
					</div>

					<hr className='hr-style' />
					<div className='total-page'>
						<div className='contents'>
							<Projectlist
								projectlist={projectList}
								projectFetched={projectFetched}
								projectImg={projectImg}
								deleteproject={(projectId) => {
									delete_project(projectId);
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

export default Profileprojects;
