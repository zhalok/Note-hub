import React, { useCallback, Component } from 'react';
//import { FullScreen, useFullScreenHandle } from "react-full-screen";

import Navbar from '../components/Navbar';

import Img from '../images/login_bg3.jpg';
import Icn from '../images/login_icon.jpg';
import style from './Login.module.css';

import { Link } from 'react-router-dom';
import '../App.css';
import Profile from '../pages/Profile';
import ContributeForm from '../components/ContributeForm';

import Congratulations from '../components/Congratulations';

var sectionStyle = {
  backgroundImage: `url(${Img})`,
  backgroundSize: 'cover',
  overflow: 'hidden',
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registration_number: '',
      password: '',
      Alert_Message: '',
    };
  }

  user_authentication = async () => {
    try {
      const respornse = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          registration_id: this.state.registration_number,
          password: this.state.password,
        }),
      });

      const user = await respornse.json();
      if (user == 'User not found') {
        alert('You are not registered');
      } else {
        this.props.handleLog({ user: this.state.registration_number });
      }
    } catch (err) {
      console.log(err);
    }
  };

  changehandler = (e) => {
    if (e.target.placeholder == 'Registration Number') {
      this.setState({
        registration_number: e.target.value,
      });
    } else if (e.target.placeholder == 'Password') {
      this.setState({
        password: e.target.value,
      });
    }
  };

  clickHander = (e) => {
    e.preventDefault();
    if (this.state.registration_number == '' || this.state.password == '') {
      alert('Please Fullfill Thre Credentials');
    } else {
      this.user_authentication();
    }
  };

  render() {
    const { nav_info, loggedInState, handleLog, userId } = this.props;
    const { Alert_Message } = this.state;

    //const handle = useFullScreenHandle();

    let Logged;

    Logged = (
      <Link
        type='button'
        className='btn btn-primary btn-lg btn-block bg-transparent p-3'
        onClick={this.clickHander}
      >
        Let me in
      </Link>
    );

    if (loggedInState == true) {
      return (
        <div style={sectionStyle} className='ht'>
          <div className='container-fluid d-flex justify-content-center mt-5 p-5 h-100'>
            <Navbar
              nav_link={nav_info}
              loggedInState={loggedInState}
              handleLog={handleLog}
              userId={userId}
            />

            <div className='d-flex flex-column justify-content-center mt-5 h-100'>
              <h3 className='pl-4 pb-3 mt-5 display-5 text-light '>
                You Are Logged In
              </h3>
              <Link
                type='button'
                to='/contribute'
                className='btn btn-outline-light btn-block'
              >
                Go To ContributeForm
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={sectionStyle} className='ht mt-5'>
        <Navbar
          nav_link={nav_info}
          loggedInState={loggedInState}
          handleLog={handleLog}
          userId={userId}
        />
        <div className='container mt-5'>
          <p>
            <h1 className='text-light mt-5'>
              <strong>Login</strong>
            </h1>
          </p>
          <div className={style.login_content}>
            <div className={style.login_body}>
              <div className='row'>
                <div className='col-sm-6 m-4 p-4'>
                  <h5 className='text-light pb-4'>Lets get started...</h5>
                  <form>
                    <input
                      type='text'
                      className='mb-3'
                      placeholder='Registration Number'
                      value={this.state.registration_number}
                      onChange={this.changehandler}
                    />
                    <input
                      type='password'
                      className='mb-4'
                      placeholder='Password'
                      value={this.state.password}
                      onChange={this.changehandler}
                    />

                    {Logged}
                  </form>
                  <p className='pt-4 text-secondary'>Haven't signed up yet?</p>
                  <Link
                    type='button'
                    to='/signup'
                    className='btn btn-primary bg-transparent'
                  >
                    Register here
                  </Link>
                </div>
                <div className='p-5 float'>
                  <img
                    src={Icn}
                    alt='icon.png'
                    height='300px'
                    width='300px'
                    className='rounded  '
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
