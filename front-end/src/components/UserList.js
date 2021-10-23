import React from 'react';
import UserCard from './UserCard';

const UserList = (props) => {
	const { userInfo } = props;
	console.log(userInfo);
	return (
		<div>
			{userInfo.map((e) => {
				return <UserCard info={e} />;
			})}
		</div>
	);
};

export default UserList;
