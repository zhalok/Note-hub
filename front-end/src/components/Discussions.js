import React from 'react';
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';

export default function Discussions({
	nav_info,
	loggedInState,
	handleLog,
	userId,
}) {
	return (
		<div
			className='ht'
			style={{
				backgroundSize: 'cover',
				padding: '10px',
				backgroundColor: '#02242c',
			}}
		>
			<Navbar
				nav_link={nav_info}
				loggedInState={loggedInState}
				handleLog={handleLog}
				userId={userId}
			/>
			<div style={{ marginTop: '100px', padding: '10px' }}>
				<div
					className='discussionCard'
					style={{
						width: '50%',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: '100px',
						backgroundColor: 'white',
						padding: '20px',
						boxShadow:
							'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
						borderRadius: '10px',
					}}
				>
					<h1>Does anyone have the Data structure book ?</h1>
					<hr />
					<p>I need the data structure book by schaums outline</p>
					<div
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							marginTop: '70px',
						}}
					>
						<Button
							variant='success'
							style={{
								display: 'flex',
								width: 'fit-content',
								boxShadow:
									'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
							}}
						>
							Up Vote
						</Button>
						<Button
							variant='danger'
							style={{
								display: 'flex',
								width: 'fit-content',
								boxShadow:
									'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
								marginLeft: '10px',
							}}
						>
							Down Vote
						</Button>{' '}
						<Button
							variant='primary'
							style={{
								display: 'flex',
								width: 'fit-content',
								boxShadow:
									'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
								marginLeft: 'auto',
							}}
						>
							Comment
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
