import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/books.png';
const BookCardStyle = require('../styles/ContentCardStyle');
const ContentCardImageStyle = require('../styles/ContentCardImageStyle');
export default function ContentCard(props) {
	const { info } = props;
	let linkDIsplay;
	if (info.link)
		linkDIsplay = (
			<Link
				type='button'
				className='btn btn-primary'
				style={{
					display: 'flex',
					width: 'fit-content',
					boxShadow:
						'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
				}}
				onClick={() => window.open(`${info.link}`, '_blank')}
			>
				Go to link
			</Link>
		);
	else
		linkDIsplay = (
			<Link
				type='button'
				className='btn btn-success'
				style={{
					display: 'flex',
					width: 'fit-content',
					boxShadow:
						'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
				}}
				// onClick={() => window.open(`${info.link}`, '_blank')}
			>
				Request
			</Link>
		);

	return (
		<div className='card' style={BookCardStyle}>
			<img
				class='card-img-top'
				src={image}
				alt='Card image cap'
				style={ContentCardImageStyle}
			/>
			<div class='card-body'>
				<h2 className='display-5'>{info.name}</h2>
				<p className='blockquote-footer' style={{ fontSize: '15px' }}>
					{info.contributor_name}
				</p>
				<p class='.lead'>{info.description}</p>
				<div style={{ display: 'flex' }}>
					<Link
						type='button'
						className='btn btn-outline-primary'
						style={{
							display: 'flex',
							marginLeft: 'auto',
							width: 'fit-content',
							marginRight: '10px',
							boxShadow:
								'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
						}}
					>
						Preview
					</Link>
					{linkDIsplay}
				</div>
			</div>
		</div>
	);
}
