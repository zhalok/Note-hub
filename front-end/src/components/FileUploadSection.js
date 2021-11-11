import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const sendFIleData = (file) => {
	const formData = new FormData();
	formData.append('content-image', file);

	console.log(formData.get('content-image'));

	fetch('http://localhost:5000/saveFile/saveContentImage', {
		method: 'POST',
		body: formData,
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((err) => console.log(err));
};

const FileUploadSection = (props) => {
	const [file, fileChanger] = useState('');

	return (
		<div style={{ marginTop: '20px', marginBottom: '20px' }}>
			<div>{console.log(file)}</div>
			<div style={{ color: 'white' }}> wanna upload an image? </div>
			<input
				className='file'
				type='file'
				name='image'
				accept='jpg,jpeg,png'
				onChange={(e) => {
					e.preventDefault();
					fileChanger(e.target.files[0]);
				}}
			/>

			<div
				style={{
					display: 'flex',
					width: 'fit-content',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '10px',
				}}
			>
				<Button
					variant='success'
					onClick={(e) => {
						e.preventDefault();
						sendFIleData(file);
					}}
				>
					Upload
				</Button>
			</div>
		</div>
	);
};

export default FileUploadSection;
