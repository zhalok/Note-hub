import React, { useState } from 'react';
import searchImage from '../../images/search.png';

export default function SearchOption(props) {
	const [searchVal, searchValController] = useState('');
	const { findByNameController } = props;
	// console.log(findByNameController);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				marginLeft: 'auto',
				height: 'fit-content',
			}}
		>
			<input
				type='search'
				className='form-control'
				id='form1'
				style={{ marginTop: '10px', marginRight: '10px' }}
				value={searchVal}
				placeholder='search'
				onChange={(e) => {
					// console.log(e.target.value);
					searchValController(e.target.value);
				}}
			></input>

			<button
				type='button'
				className='btn btn-success'
				style={{ marginTop: '10px', height: '100%' }}
				onClick={() => {
					findByNameController(searchVal);
				}}
			>
				<img src={searchImage} style={{ height: '20px' }} />
			</button>
		</div>
	);
}
