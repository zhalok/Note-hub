import React, { Component } from 'react';
import { Switch } from 'react-router';
import Img from '../images/profile_dark.jpg';
import { Link } from 'react-router-dom';

import ChoosefileBox from './/ChoosefileBox';
import '../App.css';
import FileUploadSection from './FileUploadSection';

var sectionStyle = {
	backgroundImage: `url(${Img})`,
};

let apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';

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
		console.log(this.state.description);
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
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.setState({
					message: 'Submited!!! Thanks For Contributing',
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
		let path = '/profile/' + userId;

		return (
			<div className='row'>
				<div className='col-lg-4'>
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
				</div>
				<div className='col-lg-8'>
					<div className='d-flex justify-content-center '>
						<div className='center-box bg-transparent border border-light p-3 mt-5 shadow-lg rounded '>
							<h3 className='text-light'>
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
									<div className='d-flex flex-column p-2 '>
										<div className='d-flex p-2'>
											<div className='d-flex'>
												<h5 className='text-light'>Select Resource Type -</h5>
												<select
													className='form-select ml-3 '
													value={this.state.selected}
													onChange={this.changehandler}
													id='select_type'
												>
													<option selected>Datatype</option>
													<option>books</option>
													<option>notes</option>
													<option>questions</option>
													<option>projects</option>
												</select>
											</div>
										</div>
									</div>
									<div className='d-flex flex-column p-2 '>
										<div className='d-flex p-2'>
											<div className='d-flex'>
												<h5 className='text-light'>Select Semester -</h5>
												<select
													className='form-select ml-3 '
													value={this.state.selected_sem}
													id='select_sem'
													onChange={this.changehandler}
												>
													<option selected>Semester</option>
													<option>semester1</option>
													<option>semester2</option>
												</select>
											</div>
										</div>
									</div>
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
									<div className='d-flex flex-column p-2 '>
										<FileUploadSection />
									</div>
									<div className='d-flex flex-column p-2 ml-5 mr-5'>
										<button
											type='submit'
											className='btn btn-outline-secondary btn-lg'
											onClick={this.clickchangeHandler}
											id='submit'
										>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
						<h3 className='text-light'>{this.state.message}</h3>
					</div>
				</div>
			</div>
		);
	}
}
