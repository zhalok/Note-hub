import React from 'react';

import Img from '../images/login.png';
import Img1 from '../images/icon.png';

import '../App.css';

var sectionStyle = {
  backgroundImage: `url(${Img})`,
};

export default class ProfileInfo extends React.Component {
  state = {
    userData: '',
    books: '',
    notes: '',
    questions: '',
    projects: '',
  };

  get_user_by_id = async (userId) => {
    console.log('Ok running');
    try {
      const response = await fetch(`http://localhost:5000/users/id/${userId}`);

      const data = await response.json();
      // console.log(data.name);
      let userData = {
        name: data.name,
        registration_id: data.registration_id,
        session: data.session,
      };
      let books = [];
      let notes = [];
      let questions = [];
      let projects = [];

      data.books.forEach((e) => {
        books.push(e.name);
      });

      data.notes.forEach((e) => {
        notes.push(e.name);
      });

      data.questions.forEach((e) => {
        questions.push(e.name);
      });

      data.projects.forEach((e) => {
        projects.push(e.name);
      });

      this.setState({
        userData: userData,
        books: books,
        notes: notes,
        questions: questions,
        projects: projects,
      });
    } catch (err) {
      console.log(err);
    }
    // console.log(this.state.userData);
  };

  componentDidMount() {
    this.get_user_by_id(this.props.match.params.id);
  }

  render() {
    let { userData, books, notes, projects, questions } = this.state;

    if (userData == '') return <h1 className='text-light'>Wait</h1>;

    books = books.map((item) => {
      return <li>{item}</li>;
    });

    notes = notes.map((item) => {
      return <li>{item}</li>;
    });

    questions = questions.map((item) => {
      return <li>{item}</li>;
    });

    projects = projects.map((item) => {
      return <li>{item}</li>;
    });

    return (
      <div className=' row'>
        <div className='col-lg-4 mt-5 p-4'>
          <div className='ml-5 p-3'>
            <img
              src={Img1}
              alt='icon.png'
              height='250px'
              width='250px'
              className='ml-5'
            />
          </div>
          <div className='ml-5 p-3'>
            <p className='display-4 text-secondary pt-3'>{userData.name}</p>
            <h3 className=' text-secondary'>{userData.session}</h3>
          </div>
        </div>
        <div className='col-lg-8 mt-5 p-4'>
          <div className='container '>
            <h2 className='display-4 text-secondary pt-3'>Contributions</h2>
            <hr className='hr-style' />
            <div>
              <div class='jumbotron p-3 bg-transparent border border-line-secondary'>
                <h3 className=' text-secondary'>Books</h3>
                <p className=' text-secondary'>
                  <ul>{books}</ul>
                </p>
              </div>
              <div class='jumbotron p-3 bg-transparent border border-line-secondary'>
                <h3 className=' text-secondary'>Notes</h3>
                <p className=' text-secondary'>
                  <ul>{notes}</ul>
                </p>
              </div>
              <div class='jumbotron p-3 bg-transparent border border-line-secondary'>
                <h3 className=' text-secondary'>Questions</h3>
                <p className=' text-secondary'>
                  <ul>{questions}</ul>
                </p>
              </div>
              <div class='jumbotron p-3 bg-transparent border border-line-secondary'>
                <h3 className=' text-secondary'>Projects</h3>
                <p className=' text-secondary'>
                  <ul>{projects}</ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
