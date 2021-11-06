import React from 'react';

import Img from '../images/login.png';
import Img1 from '../images/icon.png';

import '../App.css';
import UserProfile from './UserProfile';

var sectionStyle = {
	backgroundColor: '#02242c',
};
const apiURL =
	process.env.NODE_ENV == 'dev'
		? 'http://localhost:5000'
		: 'https://notehubapi.herokuapp.com';

export default class ProfileInfo extends React.Component {
	state = {
		name: '',
		session: '',
		registration_id: '',
		github: '',
		linkedin: '',
		books: 0,
		notes: 0,
		questions: 0,
		projects: 0,
	};

	get_user_by_id = async (userId) => {
		console.log('Ok running');
		const url = `${apiURL}/users/id/${userId}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data[0]);
				this.setState({
					name: data[0].name,
					session: data[0].session,
					registration_id: data[0].registration_id,
					github: data[0].github,
					linkedin: data[0].linkedin,
				});
			});
		// console.log(this.state.userData);
	};

	componentDidMount() {
		this.get_user_by_id(this.props.match.params.id);
	}

	render() {
		let {
			name,
			session,
			registration_id,
			books,
			notes,
			projects,
			questions,
			github,
			linkedin,
		} = this.state;

		if (name == '') return <h1 className='text-light'>Wait</h1>;

		return (
			<div style={{ padding: '30px', backgroundColor: '#02242c' }}>
				<UserProfile
					name={name}
					session={session}
					registration_id={registration_id}
					github={github}
					linkedin={linkedin}
				/>
			</div>
		);
	}
}
