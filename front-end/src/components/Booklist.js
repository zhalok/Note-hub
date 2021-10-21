import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/books.png';
import ContentCard from './ContentCard';
const BookCardStyle = require('../styles/ContentCardStyle');
const ContentCardImageStyle = require('../styles/ContentCardImageStyle');

export default class Booklist extends Component {
	render() {
		const { booklist } = this.props;

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
	}
}
