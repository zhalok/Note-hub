import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const sendFIleData = (file) => {};

const FileUploadSection = (props) => {
	const [file, fileChanger] = useState('');

	const showFileInfo = (e) => {
		const filereader = new FileReader();
		filereader.readAsDataURL(file);
		filereader.onload = () => {
			console.log(filereader.result);
		};
	};

	return (
		<div style={{ marginTop: '10px' }}>
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
						showFileInfo(e);
					}}
				>
					Upload
				</Button>
			</div>
		</div>
	);
};

export default FileUploadSection;
