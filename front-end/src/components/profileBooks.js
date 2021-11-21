import React, { useState } from 'react';
import { useParams } from 'react-router';

const ProfileBooks = () => {
	const { profileId } = useParams();
	const [bookList, setBookList] = useState([]);

	return (
		<div>
			<h1 style={{ color: 'black', marginTop: '100px' }}>Hello world</h1>
		</div>
	);
};

export default ProfileBooks;
