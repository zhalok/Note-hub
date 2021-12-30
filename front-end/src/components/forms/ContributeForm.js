import React, { Component } from 'react';
import { Switch } from 'react-router';
import Img from '../../images/profile_dark.jpg';
import img from '../../images/contribute.jpg';
import { Link } from 'react-router-dom';
import ModalCongoMessage from '../messages/ModalCongoMessage';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../../App.css';
import FileUploadSection from '../others/FileUploadSection';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

var sectionStyle = {
	backgroundImage: `url(${Img})`,
};

let apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';

// apiURL = 'http://localhost:5000';

export default class ContributeForm extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		selected_type: 'DataType',
		selected_sem: 'Semester',
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
		formData.append('content', this.state.image);
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
				this.setState({ showCongoMessage: true });
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

		if (e.target.placeholder == 'Content Name') {
			this.setState({
				content_name: e.target.value,
			});
		}

		if (e.target.id == 'description') {
			this.setState({
				description: e.target.value,
			});
		}
		if (e.target.placeholder == 'Link') {
			this.setState({
				link: e.target.value,
			});
		}
	};

	changehandler = (e) => {
		if (e.target.id == 'select_sem') {
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
			console.log(this.state);
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
		const { userId } = this.props;
		// console.log(userId);
		let path = '/profile/' + userId;

		return (
			<div
				style={{ marginTop: '100px', display: 'flex', flexDirection: 'row' }}
			>
				{/* <div className='col-lg-4'>
					<div className='container p-3 m-5'>
						<img src={Img} alt='profile_dark.jpg' className='img-sm' />
						<Link
							type='button'
							to={path}
							className='btn btn-outline-light btn-lg btn-block p-3'
						>
							See Your Profile
						</Link>
					</div>
				</div> */}
				<div
					className='col-lg-8'
					style={{
						display: 'flex',
						width: 'fit-content',
					}}
				>
					<div
						className='d-flex justify-content-center '
						style={{ display: 'flex', flexDirection: 'column' }}
					>
						<div
							className='center-box  p-3  shadow rounded '
							style={{
								backgroundImage:
									'linear-gradient(120deg, rgba(39, 130, 186), rgba(122, 205, 250))',
								marginLeft: '20px',
								marginRight: '20px',
							}}
						>
							<ModalCongoMessage
								show={(this, this.state.showCongoMessage)}
								onHide={() => {
									this.setState({
										showCongoMessage: false,
									});
								}}
							/>
							<h3 style={{ color: 'black' }}>
								Please provide all the informations
							</h3>
							<hr className='bg-secondary' />
							<div>
								<div className='form-group'>
									<div className='d-flex flex-column p-2'>
										<input
											type='text'
											className='form-control mt-2'
											placeholder='Content Name'
											value={this.state.content_name}
											onChange={this.textchangehandler}
										/>
										<textarea
											className='form-control mt-2'
											placeholder='Description of the content(optional)'
											id='description'
											value={this.state.description}
											onChange={this.textchangehandler}
										/>
									</div>
									<div className='d-flex flex-column p-2 '></div>
									<div className='d-flex flex-column p-2 '>
										<div className='d-flex p-2'>
											<div className='d-flex'>
												<select
													className='custom-select ml-4 mr-5 '
													value={this.state.selected}
													onChange={this.changehandler}
													id='select_type'
												>
													<option selected>Resource type</option>
													<option>books</option>
													<option>notes</option>
													<option>questions</option>
													<option>projects</option>
												</select>

												<select
													className='custom-select ml-auto '
													value={this.state.selected_sem}
													id='select_sem'
													onChange={this.changehandler}
												>
													<option selected>Select semester</option>
													<option>semester1</option>
													<option>semester2</option>
													<option>semester3</option>
													<option>semester4</option>
													<option>semester5</option>
													<option>semester6</option>
													<option>semester7</option>
													<option>semester8</option>
												</select>
											</div>
										</div>
									</div>
									{/* <input
										type='file'
										onChange={(e) => {
											this.setState({ image: e.target.files[0] });
										}}
									/> */}
									<input
										className='form-control'
										placeholder='Link'
										style={{
											width: '95%',
											marginLeft: 'auto',
											marginRight: 'auto',
										}}
										onChange={this.textchangehandler}
									></input>
									<div className='d-flex flex-column p-2 '></div>
									<div className='d-flex flex-column p-2 ml-5 mr-5 '>
										<button
											type='submit'
											className='btn btn-primary btn-lg'
											onClick={this.clickchangeHandler}
											id='submit'
										>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
						<br />
						<div>
							<h3 className='text-light'>{this.state.message}</h3>
						</div>
					</div>
				</div>
				<div>
					<img src={img} style={{ marginLeft: 'auto' }} />
				</div>
			</div>
		);
	}
}
