import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import DescriptionIcon from '@mui/icons-material/Description';
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 'fit-content',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function DescriptionModal({
	handleOpen,
	handleClose,
	open,
	description,
}) {
	let icon = <DescriptionIcon color='primary' />;
	let _description = description;
	console.log(description);
	// console.log(description.length);
	// _description.trim();
	// console.log(description.trim());
	if (_description == '' || !description) {
		_description = 'No description was added for this content';
		icon = <ContentPasteOffIcon color='primary' />;
	}

	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						{/* <Typography id='transition-modal-title' variant='h6' component='h2'>
							Description
						</Typography> */}
						<div style={{ display: 'flex', flexDirection: 'row' }}>
							{icon}
							<Typography id='transition-modal-description' sx={{ ml: 2 }}>
								{_description}
							</Typography>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
