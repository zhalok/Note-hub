import React from 'react';
import UserCard from './UserCard';

const UserList = (props) => {
	const { userInfo } = props;
	console.log(userInfo);
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
};

export default UserList;
