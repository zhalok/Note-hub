import React, { Component } from 'react';
import BasicInfoContext from '../../Contexts/BasicInfoContext';
import ContentCard from '../cards/ContentCard';

export default class Booklist extends Component {
	render() {
		const { booklist, bookFetched, bookImg, deleteBook } = this.props;

		if (bookFetched) {
			if (booklist.length > 0) {
				return (
					<div style={{ padding: '20px' }}>
						{booklist.map((e) => (
							<BasicInfoContext.Consumer>
								{({ userId, loggedInState }) => (
									<ContentCard
										info={e}
										userId={userId}
										loggedInState={loggedInState}
										contentImg={bookImg}
										deleteContent={(bookId) => {
											deleteBook(bookId);
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
			return <div className='d-flex justify-content-center mt-5'></div>;
		}
	}
}
