import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import img from '../../images/contribute.jpg';

export default class ContributeCredential extends React.Component {
	render() {
		return (
			<Card
				style={{
					width: '70%',

					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '100px',
					backgroundColor: '#c0dfa8',
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<div
						style={{
							height: '100%',
							width: '50%',
							padding: '20px',
							marginRight: 'auto',
						}}
					>
						<div
							style={{
								display: 'flex',
								marginLeft: 'auto',
								marginRight: 'auto',

								flexDirection: 'column',
							}}
						>
							<b>
								<h3
									style={{
										textAlign: 'center',
										marginBottom: '50px',
										marginTop: '20px',
									}}
								>
									In order to contribute you have to be logged in first
								</h3>
							</b>

							<Link
								type='button'
								className='btn btn-primary w-100'
								to='/login'
								style={{ marginLeft: 'auto', marginRight: 'auto' }}
							>
								Login
							</Link>
							<br />
							<small>Havent signed up yet ?</small>

							<Link
								type='button'
								className='btn btn-outline-success w-100'
								to='/signup'
								style={{ marginLeft: 'auto', marginRight: 'auto' }}
							>
								Signup
							</Link>
						</div>
					</div>
					<div>
						<img src={img} style={{ marginLeft: 'auto' }} />
					</div>
				</div>
			</Card>
		);
	}
}
