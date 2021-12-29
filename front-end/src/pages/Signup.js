import React, { Component } from 'react';

import Navbar from '../components/others/Navbar';
import Img from '../images/reg_icon.jpg';
import style from './Signup.module.css';
import FileUploadSection from '../components/others/FileUploadSection';

import { Link } from 'react-router-dom';
import BasicInfoContext from '../Contexts/BasicInfoContext';
import GeneralPopUpNotification from '../components/messages/GeneralPopUpNotification';
import SideNavbarDrawer from '../components/others/SideNavDrawer';

let apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';
// apiURL = 'http://localhost:5000';

export default class SignUp extends Component {
	state = {
		email: '',
		password: '',
		confirm_password: '',
		fullname: '',
		registration_number: '',
		contract_number: '',
		session: '',
		message: '',
		github: '',
		linkedin: '',
		showMessage: false,
	};

	signup_request_handler = async (e) => {
		try {
			const respornse = await fetch(`${apiURL}/signup`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: this.state.fullname.trim(),
					registration_id: this.state.registration_number.trim(),
					phone: this.state.contract_number.trim(),
					email: this.state.email.trim(),
					session: this.state.session.trim(),
					password: this.state.password.trim(),
					github: this.state.github,
					linkedin: this.state.linkedin,
				}),
			});
			console.log(this.state);
			const data = await respornse.json();

			if (data == 'User Already Registered') {
				this.setState({
					message: data,
					showMessage: true,
				});
			} else if (data == 'Request Processing') {
				this.setState({
					message: 'Your registration request is already pending',
					showMessage: true,
				});
			} else {
				this.setState({
					message: 'Your registration has been requested for approval',
					showMessage: true,
					email: '',
					password: '',
					confirm_password: '',
					fullname: '',
					registration_number: '',
					contract_number: '',
					session: '',
					github: '',
					linkedin: '',
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	click_handler = (e) => {
		e.preventDefault();
		const {
			email,
			password,
			confirm_password,
			fullname,
			session,
			registration_number,
			contract_number,
		} = this.state;
		if (e.target.id == 'submit') {
			if (
				email == '' ||
				password == '' ||
				confirm_password == '' ||
				fullname == '' ||
				session == '' ||
				registration_number == '' ||
				contract_number == ''
			) {
				alert('Please Fullfill All The Fields');
			} else if (password != confirm_password) {
				alert('Password and Confirm password didnt match');
			} else {
				this.signup_request_handler(e);
			}
		}
	};

	change_handler = (e) => {
		if (e.target.placeholder == 'Email') {
			this.setState({
				email: e.target.value,
			});
		} else if (e.target.placeholder == 'Password') {
			this.setState({
				password: e.target.value,
			});
		} else if (e.target.placeholder == 'Confirm Password') {
			this.setState({
				confirm_password: e.target.value,
			});
		} else if (e.target.placeholder == 'Fullname') {
			this.setState({
				fullname: e.target.value,
			});
		} else if (e.target.placeholder == 'Registration Number') {
			this.setState({
				registration_number: e.target.value.trim(),
			});
		} else if (e.target.placeholder == 'Contact Number') {
			this.setState({
				contract_number: e.target.value,
			});
		} else if (e.target.placeholder == 'Session') {
			this.setState({
				session: e.target.value,
			});
		} else if (e.target.placeholder == 'Github') {
			this.setState({
				github: e.target.value,
			});
		} else if (e.target.placeholder == 'LinkedIn') {
			this.setState({
				linkedin: e.target.value,
			});
		}
	};

	render() {
		const { nav_info, loggedInState, handleLog, userId } = this.props;
		const {
			email,
			password,
			confirm_password,
			fullname,
			registration_number,
			contract_number,
			session,
			github,
			linkedin,
		} = this.state;

		return (
			<div
				className={style.login_dark}
				style={{ backgroundSize: 'cover', backgroundColor: '#8bbaf7' }}
			>
				<BasicInfoContext.Consumer>
					{({ nav_info, loggedInState, handleLog, userId }) => (
						<SideNavbarDrawer
							nav_link={nav_info}
							loggedInState={loggedInState}
							handleLog={handleLog}
							userId={userId}
						/>
					)}
				</BasicInfoContext.Consumer>

				<div
					className='container'
					style={{ backgroundSize: 'cover', backgroundColor: '#8bbaf7' }}
				>
					<form style={{ marginTop: '30px' }}>
						<div className='form-group'>
							<div className=' row'>
								<div className='col-lg-6'>
									<p>Provide all necessary information...</p>
									<input
										className={style.form_control}
										type='email'
										placeholder='Email'
										value={email}
										onChange={this.change_handler}
									/>
									<input
										type='password'
										className={style.form_control}
										placeholder='Password'
										onChange={this.change_handler}
										value={password}
									/>
									<input
										type='password'
										className={style.form_control}
										placeholder='Confirm Password'
										onChange={this.change_handler}
										value={confirm_password}
									/>
									<input
										type='text'
										className={style.form_control}
										placeholder='Fullname'
										onChange={this.change_handler}
										value={fullname}
									/>
									<input
										type='text'
										className={style.form_control}
										placeholder='Registration Number'
										onChange={this.change_handler}
										value={registration_number}
									/>
									<input
										type='text'
										className={style.form_control}
										placeholder='Contact Number'
										onChange={this.change_handler}
										value={contract_number}
									/>
									<input
										type='text'
										className={style.form_control}
										placeholder='Session'
										onChange={this.change_handler}
										value={session}
									/>
									<input
										type='text'
										className={style.form_control}
										placeholder='Github'
										onChange={this.change_handler}
										value={github}
									/>
									<input
										type='text'
										className={style.form_control}
										placeholder='LinkedIn'
										onChange={this.change_handler}
										value={linkedin}
									/>
									<div>{/* <FileUploadSection /> */}</div>
									<button
										className={style.btn_primary}
										id='submit'
										onClick={this.click_handler}
									>
										Submit
									</button>
									<br /> <br />
									{/* <h2>{this.state.message}</h2> */}
								</div>
								<div className='col-lg-6'>
									<img
										src={Img}
										alt='Register Icon'
										height='500px'
										width='450px'
									/>
								</div>
							</div>
						</div>
					</form>
				</div>
				<GeneralPopUpNotification
					show={this.state.showMessage}
					onHide={() => {
						this.setState({
							showMessage: false,
						});
					}}
					message={this.state.message}
				/>
			</div>
		);
	}
}
