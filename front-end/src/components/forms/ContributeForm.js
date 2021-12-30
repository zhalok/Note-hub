import React, { Component } from 'react';
import { Switch } from 'react-router';
import Img from '../../images/contribute.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddCardIcon from '@mui/icons-material/AddCard';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import { Select, MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import PublishIcon from '@mui/icons-material/Publish';
import ModalCongoMessage from '../messages/ModalCongoMessage';

import SendIcon from '@mui/icons-material/Send';
import GeneralPopUpNotification from '../messages/GeneralPopUpNotification';

var sectionStyle = {
	backgroundImage: `url(${Img})`,
};

let apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';

apiURL = 'http://localhost:5000';

export default class ContributeForm extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		selected_type: '',
		selected_sem: '',
		your_name: '',
		registration: '',
		content_name: '',
		description: '',
		message: '',
		profile_path: '',
		message: '',
		contributor_email: '',
		link: '',
		image: null,
		showCongoMessage: false,
	};

	getInfo = async (user_id) => {
		try {
			const response = await fetch(`${apiURL}/users/id/${user_id}`);
			const data = await response.json();

			this.setState({
				your_name: data[0].name,
				registration: data[0].registration_id,
				contributor_email: data[0].email,
			});
		} catch (err) {
			console.log(err);
		}
	};

	submit_information = async () => {
		console.log(this.state);
		const formData = new FormData();
		// formData.append('content', this.state.image);
		fetch(`${apiURL}/contribute/${this.state.selected_type}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: this.state.content_name.trim(),
				semester: this.state.selected_sem.trim(),
				type: this.state.selected_type.trim(),
				contributor_id: this.state.registration.trim(),
				contributor_name: this.state.your_name.trim(),
				description: this.state.description.trim(),
				link: this.state.link.trim(),
				contributor_email: this.state.contributor_email,
				formData,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					showCongoMessage: true,
					selected_type: '',
					selected_sem: '',
					your_name: '',
					registration: '',
					content_name: '',
					description: '',
					message: '',
					profile_path: '',
					message: '',
					contributor_email: '',
					link: '',
				});
			})
			.catch((err) => console.log(err));
	};

	textchangehandler = (e) => {
		if (e.target.placeholder == 'Your Name') {
			this.setState({
				your_name: e.target.value,
			});
		}

		if (e.target.placeholder == 'Registration Number') {
			this.setState({
				registration: e.target.value,
			});
		}

		if (e.target.id == 'content_name') {
			this.setState({
				content_name: e.target.value,
			});
		}

		if (e.target.id == 'description') {
			this.setState({
				description: e.target.value,
			});
		}
		if (e.target.id == 'link') {
			this.setState({
				link: e.target.value,
			});
		}
	};

	changehandler = (e) => {
		if (e.target.id == 'select_sem') {
			console.log(e.target.id);
			this.setState({
				selected_sem: e.target.value,
			});
		}
		if (e.target.id == 'select_type') {
			this.setState({
				selected_type: e.target.value,
			});
		}
	};

	changeModalDisplay = (val) => {
		this.setState({
			showCongoMessage: val,
		});
	};

	clickchangeHandler = (e) => {
		e.preventDefault();
		if (e.target.id == 'submit') {
			// console.log(this.state);
			const {
				your_name,
				registration,
				content_name,
				selected_sem,
				selected_type,
			} = this.state;

			if (
				your_name == '' ||
				registration == '' ||
				content_name == '' ||
				selected_sem == 'Semester' ||
				selected_type == 'Datatype'
			) {
				alert('Please provide all information');
			} else {
				console.log(this.state);
				this.submit_information(this.selected_type);
			}
		}
	};

	componentDidMount() {
		const { userId } = this.props;

		this.getInfo(userId);
	}

	render() {
		console.log(this.props.userId);
		console.log(this.state.selected_sem);
		console.log(this.state.selected_type);
		return (
			<div
				style={{
					// marginTop: '100px',
					display: 'flex',
					flexDirection: 'column',
					width: '100%',

					// backgroundColor: 'white',

					// padding: '20px',
				}}
			>
				<div></div>

				<div
					style={{
						// width: 'fit-content',
						// width: '50%',
						maxWidth: 'fit-content',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: '20px',
						padding: '20px',
					}}
				>
					<Box
						sx={{
							width: '100%',
							maxWidth: '100%',
							backgroundColor: 'white',
							marginLeft: 'auto',
							marginRight: 'auto',
							flexDirection: 'row',
							display: 'flex',
							// width: 'fit-content',
							// height: '200%',
							padding: '20px',
							// marginTop: '100px',
							borderRadius: '10px',
							// backgroundImage:
							// 	'linear-gradient(120deg, rgba(39, 130, 186), rgba(122, 205, 250))',
							boxShadow:
								'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
						}}
					>
						<div>
							<div style={{}}>
								<div
									style={{
										width: 'fit-content',
										marginLeft: 'auto',
										marginRight: 'auto',
										display: 'flex',
										flexDirection: 'row',
									}}
								>
									<AddCardIcon />
									<Typography variant='h6' style={{ marginLeft: '10px' }}>
										Please provide necessary informations
									</Typography>
								</div>
								<Box
									sx={{
										display: 'flex',
										// alignItems: 'flex-end',
										marginTop: '20px',
									}}
								>
									<DriveFileRenameOutlineIcon sx={{ mr: 1, my: 0.5 }} />
									<TextField
										id='content_name'
										label='Content Name'
										variant='outlined'
										fullWidth
										value={this.state.content_name}
										onChange={this.textchangehandler}
									/>
								</Box>
								<Box
									sx={{
										display: 'flex',
										// alignItems: 'flex-end',
										marginTop: '20px',
									}}
								>
									<DescriptionIcon sx={{ mr: 1, my: 0.5 }} />
									<TextField
										id='description'
										label='Short Description'
										variant='outlined'
										fullWidth
										value={this.state.description}
										onChange={this.textchangehandler}
									/>
								</Box>
								<Box
									sx={{
										// width: '25%',
										display: 'flex',
										marginTop: '20px',
										display: 'flex',
										flexDirection: 'row',
										// alignItems: 'flex-end',
									}}
								>
									<SchoolIcon sx={{ mr: 1, my: 0.5 }} />
									<FormControl size='medium' fullWidth>
										<InputLabel id='demo-simple-select-label'>
											Semester
										</InputLabel>
										<Select
											labelId='demo-simple-select-label'
											id='select_sem'
											label='Semester'
											value={this.state.selected_sem}
											onChange={(e) => {
												this.setState({
													selected_sem: e.target.value,
												});
											}}
										>
											{[
												{ label: 'Semester 1', val: 'semester1' },
												{ label: 'Semester 2', val: 'semester2' },
												{ label: 'Semester 3', val: 'semester3' },
												{ label: 'Semester 4', val: 'semester4' },
												{ label: 'Semester 5', val: 'semester5' },
												{ label: 'Semester 6', val: 'semester6' },
												{ label: 'Semester 7', val: 'semester7' },
												{ label: 'Semester 8', val: 'semester8' },
											].map((e) => (
												<MenuItem value={e.val}>{e.label}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Box>
								<Box
									sx={{
										// width: '25%',
										display: 'flex',
										marginTop: '20px',
										display: 'flex',
										flexDirection: 'row',
									}}
								>
									<FileCopyRoundedIcon sx={{ mr: 1, my: 0.5 }} />
									<FormControl size='medium' fullWidth>
										<InputLabel id='demo-simple-select-label'>
											Content Type
										</InputLabel>
										<Select
											labelId='demo-simple-select-label'
											id='select_type'
											value={this.state.selected_type}
											label='Content Type'
											onChange={(e) => {
												console.log(e.target.value);
												this.setState({
													selected_type: e.target.value,
												});
											}}
											// style={{ color: 'black' }}
										>
											{[
												{ label: 'Books', val: 'books' },
												{ label: 'Notes', val: 'notes' },
												{ label: 'Questions', val: 'questions' },
												{ label: 'Projects', val: 'projects' },
											].map((e) => (
												<MenuItem value={e.val}>{e.label}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Box>
								<Box
									sx={{
										display: 'flex',
										marginTop: '20px',
									}}
								>
									<InsertLinkRoundedIcon sx={{ mr: 1, my: 0.5 }} />
									<TextField
										id='link'
										label='Content Link'
										variant='outlined'
										fullWidth
										value={this.state.link}
										onChange={this.textchangehandler}
									/>
								</Box>
								<div
									style={{
										marginTop: '20px',
										width: 'fit-content',
										marginLeft: 'auto',
										marginRight: 'auto',
									}}
								>
									<Button
										id='submit'
										variant='contained'
										endIcon={<PublishIcon />}
										onClick={this.clickchangeHandler}
									>
										Submit
									</Button>
								</div>
							</div>
						</div>
						<div>
							<img src={Img} />
						</div>
					</Box>
				</div>
				<ModalCongoMessage
					show={this.state.showCongoMessage}
					onHide={() => {
						this.setState({
							showCongoMessage: false,
						});
					}}
				/>
			</div>
		);
	}
}
