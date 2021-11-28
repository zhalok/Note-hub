import React, { Component } from 'react';
import ContentCard from './ContentCard';
import BasicInfoContext from '../Contexts/BasicInfoContext';

export default class Projectlist extends Component {
	render() {
		const { projectlist, projectFetched, projectImg, deleteProject } =
			this.props;
		if (projectFetched) {
			if (projectlist.length > 0) {
				return (
					<div style={{ padding: '20px' }}>
						{projectlist.map((e) => (
							<BasicInfoContext.Consumer>
								{({ userId, loggedInState }) => (
									<ContentCard
										info={e}
										userId={userId}
										loggedInState={loggedInState}
										contentImg={projectImg}
										deleteContent={(project_id) => {
											deleteProject(project_id);
										}}
									/>
								)}
							</BasicInfoContext.Consumer>
						))}
					</div>
				);
			} else {
				return (
					<div className='d-flex justify-content-center mt-5'>
						<h3 style={{ color: 'black' }}>No Data Found</h3>{' '}
					</div>
				);
			}
		} else {
			return (
				<div className='d-flex justify-content-center mt-5'>
					{/* <h3 style={{ color: 'black' }}>Loading</h3>{' '} */}
				</div>
			);
		}
	}
}
