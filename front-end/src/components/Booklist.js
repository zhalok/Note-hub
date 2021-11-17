import React, { Component } from 'react';
import ContentCard from './ContentCard';

export default class Booklist extends Component {
	render() {
		const { booklist, bookFetched } = this.props;
		if (bookFetched) {
			if (booklist.length > 0) {
				return (
					<div style={{ padding: '20px' }}>
						{booklist.map((e) => (
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
			return <div className='d-flex justify-content-center mt-5'></div>;
		}
	}
}
