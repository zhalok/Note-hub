import React, { Component } from 'react';
import ContentCard from './ContentCard';

export default class Projectlist extends Component {
	render() {
		const { projectlist, projectFetched } = this.props;
		if (projectFetched) {
			if (projectlist.length > 0) {
				return (
					<div style={{ padding: '20px' }}>
						{projectlist.map((e) => (
							<ContentCard info={e} />
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
					<h3 style={{ color: 'black' }}>Loading</h3>{' '}
				</div>
			);
		}
	}
}
