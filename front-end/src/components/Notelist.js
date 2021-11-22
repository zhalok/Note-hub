import React, { Component } from 'react';
import BasicInfoContext from '../Contexts/BasicInfoContext';
import ContentCard from './ContentCard';

export default class Notelist extends Component {
	render() {
		const { notelist, noteFetched } = this.props;
		if (noteFetched) {
			if (notelist.length > 0) {
				return (
					<div style={{ padding: '20px' }}>
						{notelist.map((e) => (
							<BasicInfoContext.Consumer>
								{({ userId }) => <ContentCard info={e} userId={userId} />}
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
