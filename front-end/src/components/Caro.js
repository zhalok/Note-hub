import React, { Component, useState } from 'react';

import Img1 from '../images/books.jpg';
import Img2 from '../images/notes.jpg';
import Img3 from '../images/projects.jpg';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel(props) {
	const [index, setIndex] = useState(0);
	const { books, notes, projects } = props;

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div
			id='carouselExampleIndicators'
			class='carousel slide'
			data-ride='carousel'
		>
			<ol class='carousel-indicators'>
				<li
					data-target='#carouselExampleIndicators'
					data-slide-to='0'
					class='active'
				></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
			</ol>
			<div class='carousel-inner'>
				<div class='carousel-item active'>
					<div class='carousel-caption d-none d-md-block'>
						<h5 class='display-4'>Books</h5>
					</div>
					<img class='d-block w-100' src={Img1} alt='First slide' />
				</div>
				<div class='carousel-item'>
					<img class='d-block w-100' src={Img2} alt='Second slide' />
					<div class='carousel-caption d-none d-md-block'>
						<h5 class='display-4'>Notes</h5>
					</div>
				</div>
				<div class='carousel-item'>
					<img class='d-block w-100' src={Img3} alt='Third slide' />
					<div class='carousel-caption d-none d-md-block'>
						<h5 class='display-4'>Projects</h5>
					</div>
				</div>
			</div>
			<a
				class='carousel-control-prev'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='prev'
			>
				<span class='carousel-control-prev-icon' aria-hidden='true'></span>
				<span class='sr-only'>Previous</span>
			</a>
			<a
				class='carousel-control-next'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='next'
			>
				<span class='carousel-control-next-icon' aria-hidden='true'></span>
				<span class='sr-only'>Next</span>
			</a>
		</div>
	);
}
