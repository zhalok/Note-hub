import React, { useEffect } from 'react';
import RequestCard from '../cards/RequestCard';

export default function RegistrationRequestsList({
	requests,
	setChanger,
	setShowMessage,
}) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			{requests.map((e) => (
				<RequestCard
					info={e}
					setChanger={setChanger}
					setShowMessage={setShowMessage}
				/>
			))}
		</div>
	);
}
