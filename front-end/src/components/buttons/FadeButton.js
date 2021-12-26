import React from 'react';

const FadeInButton = ({ normalColor, hoverColor, text }) => {
	return (
		<div
			id='fadeInButton'
			style={{
				backgroundColor: normalColor,
				border: 'none',
				color: 'black',
				padding: '16px 32px',
				textAlign: 'center',
				fontSize: '16px',
				margin: '4px 2px',
				opacity: '0.6',
				transition: '0.3s',
				display: 'inline-block',
				textDecoration: 'none',
				cursor: 'pointer',
				borderRadius: '10px',
				marginLeft: 'auto',
				marginRight: 'auto',
				width: '100%',
				boxShadow:
					'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
			}}
			onMouseOver={() => {
				document.getElementById('fadeInButton').style.backgroundColor =
					hoverColor;
			}}
			onMouseOut={() => {
				document.getElementById('fadeInButton').style.backgroundColor =
					normalColor;
			}}
		>
			{text}
		</div>
	);
};

export default FadeInButton;
