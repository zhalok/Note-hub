import React from 'react';

const HoverButton = ({ type, bgColor }) => {
	console.log(type);
	return (
		<div>
			<button
				className='button'
				style={{ verticalAlign: 'middle', backgroundColor: bgColor }}
			>
				<span>{type} </span>
			</button>
		</div>
	);
};

export default HoverButton;