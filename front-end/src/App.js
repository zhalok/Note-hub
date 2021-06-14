import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Notes from "./pages/Notes";
import Questions from "./pages/Questions";
import Projects from "./pages/Projects";
import ContributeForm from "./components/ContributeForm";
import ContributeCredential from "./components/ContributeCredential";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contribute from "./pages/Contribute";
import Profile from "./pages/Profile";

import "./App.css";

export default class App extends Component {
  state = {
    isLoggedIn: false,
    userId: 2018331046,
  };

  loginStateChanger = (reg) => {
    console.log("login state changer is called");
    if (this.state.isLoggedIn == false) {
      this.setState({
        isLoggedIn: true,
        userId: 2018331046,
      });
    } else {
      this.setState({
        isLoggedIn: false,
      });
    }
  };

  render() {
    const user = [
      {
        email: "zhalokrahman007@gmail.com",
        password: "03041959",
      },

      {
        email: "kaifatab2@gmail.com",
        password: "kaifatab",
      },
    ];

    let nav_info = [
      { id: 1, title: "Login", link: "/login" },
      { id: 2, title: "Sign up", link: "/signup" },
    ];

    const { isLoggedIn, userId } = this.state;

    return (
      <Router>
        <div>
          <Route path="/" exact>
            <Home
              nav_info={nav_info}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
            />
          </Route>
          <Route path="/books">
            <Books
              nav_info={nav_info}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
            />
          </Route>
          <Route path="/notes">
            <Notes
              nav_info={nav_info}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
            />
          </Route>
          <Route path="/questions">
            <Questions
              nav_info={nav_info}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
            />
          </Route>
          <Route path="/projects">
            <Projects
              nav_info={nav_info}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
            />
          </Route>
          <Route path="/contribute">
            <Contribute
              nav_info={nav_info}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
              userId={userId}
            />
          </Route>
          <Route path="/login">
            <Login
              nav_info={nav_info}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
            />
          </Route>
          <Route path="/signup">
            <Signup
              nav_info={nav_info}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
            />
          </Route>
          <Route path="/profile/:id">
            <Profile
              nav_info={nav_info}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
              user={userId}
            />
          </Route>
        </div>
      </Router>
    );
  }
}
