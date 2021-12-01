import React from 'react';
import UserCard from '../cards/UserCard';

const UserList = (props) => {
	const { userInfo } = props;
	console.log(userInfo);
	if (userInfo.length > 0) {
		return (
			<div
				style={{
					marginLeft: 'auto',
					marginRight: 'auto',
					width: 'fit-content',
				}}
			>
				{userInfo.map((e) => {
					return <UserCard info={e} />;
				})}
			</div>
		);
	} else {
		return (
			<div>
				{' '}
				<div className='d-flex justify-content-center mt-5'>
					<h3 style={{ color: 'black' }}>No Data Found</h3>{' '}
				</div>
			</div>
		);
	}
};

export default UserList;
