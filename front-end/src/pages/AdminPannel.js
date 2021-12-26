import React, { useEffect } from 'react';
import AdminLoginForm from '../components/forms/AdminLoginForm';

var sectionStyle = {
	// backgroundImage: `url(${Img})`,
	backgroundSize: 'cover',
	overflow: 'hidden',
};

export default function AdminPannel() {
	useEffect(() => {
		document.body.style.backgroundColor = '#2e5267';
	}, []);

	return (
		<div id='adminPannel'>
			<div>
				<AdminLoginForm />
			</div>
		</div>
	);
}
