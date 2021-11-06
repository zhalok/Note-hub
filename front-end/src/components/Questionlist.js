import React, { Component } from 'react';
import ContentCard from './ContentCard';

export default class Questionlist extends Component {
	render() {
		const { questionlist, questionFetched } = this.props;
		if (questionFetched) {
			if (questionlist.length > 0) {
				return (
					<div style={{ padding: '20px' }}>
						{questionlist.map((e) => (
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
