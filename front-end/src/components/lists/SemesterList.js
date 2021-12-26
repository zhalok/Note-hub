import React from 'react';

export default function SemesterList(porps) {
	const { controller } = porps;
	return (
		<div className='semester-options'>
			<h3 style={{ color: 'white' }}>Semesters</h3>
			<hr className='hr-style' />
			<button
				type='button'
				id='1'
				onClick={controller}
				className='btn btn-outline-success btn-lg btn-block'
				value='semester1'
				style={{ color: 'white' }}
			>
				Semester 1
			</button>
			<button
				type='button'
				id='2'
				onClick={controller}
				className='btn btn-outline-success btn-lg btn-block'
				value='semester2'
				style={{ color: 'white' }}
			>
				Semester 2
			</button>
			<button
				type='button'
				id='3'
				onClick={controller}
				className='btn btn-outline-success btn-lg btn-block'
				value='semester3'
				style={{ color: 'white' }}
			>
				Semester 3
			</button>
			<button
				type='button'
				id='4'
				onClick={controller}
				className='btn btn-outline-success btn-lg btn-block'
				value='semester4'
				style={{ color: 'white' }}
			>
				Semester 4
			</button>
			<button
				type='button'
				id='5'
				onClick={controller}
				className='btn btn-outline-success btn-lg btn-block'
				value='semester5'
				style={{ color: 'white' }}
			>
				Semester 5
			</button>
			<button
				type='button'
				id='6'
				onClick={controller}
				className='btn btn-outline-success btn-lg btn-block'
				value='semester6'
				style={{ color: 'white' }}
			>
				Semester 6
			</button>
			<button
				type='button'
				id='7'
				onClick={controller}
				className='btn btn-outline-success btn-lg btn-block'
				value=' semester7'
				style={{ color: 'white' }}
			>
				Semester 7
			</button>
			<button
				type='button'
				id='8'
				onClick={controller}
				className='btn btn-outline-success btn-lg btn-block'
				value=' semester8'
				style={{ color: 'white' }}
			>
				Semester 8
			</button>
		</div>
	);
}
