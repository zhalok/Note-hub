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
    userEmail: "",
  };

  loginStateChanger = (id) => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
      userEmail: id,
    });
  };

  render() {
    const books = {
      semester1: [
        {
          id: 1,
          name: "Vector Analysis",
          author: "Author1",
          publisher: "Schaums Outline",
          contributor: "Zhalok Rahman",
        },
        {
          id: 2,
          name: "Linear Algebra",
          author: "author1",
          publisher: "Schaums Outline",
          contributor: "Zhalok Rahman",
        },
        {
          id: 3,
          name: "C Programming",
          author: "author1",
          publisher: "Schaums Outline",
          contributor: "Zhalok Rahman",
        },
      ],

      semester2: [
        {
          id: 1,
          name: "Data Structure",
          author: "author1",
          publisher: "Schaums Outline",
          contributor: "Zhalok Rahman",
        },
        {
          id: 2,
          name: "Electronic Circuits",
          author: "author1",
          publisher: "Schaums Outline",
          contributor: "Zhalok Rahman",
        },
        {
          id: 3,
          name: "Fundamentals of Physics",
          author: "author1",
          publisher: "Schaums Outline",
          contributor: "Zhalok Rahman",
        },
      ],
    };

    const notes = {
      semester1: [
        {
          id: 1,
          name: "Math Notes",
          contributor: "Kaifa Tabassum",
        },

        {
          id: 2,
          name: "C notes",
          contributor: "Zhalok Rahman",
        },

        {
          id: 3,
          name: "DM notes",
          contributor: "Aisha H Chowdhury",
        },
      ],

      semester2: [
        {
          id: 1,
          name: "Calculus Notes",
          contributor: "Kaifa Tabassum",
        },

        {
          id: 2,
          name: "DS notes",
          contributor: "Zhalok Rahman",
        },

        {
          id: 3,
          name: "Physics notes",
          contributor: "Aisha H Chowdhury",
        },
      ],
    };

    const questions = {
      semester1: [
        {
          id: 1,
          name: "Math TT Questions",
          contributor: "Kaifa Tabassum",
        },

        {
          id: 2,
          name: "C TT Questions",
          contributor: "Zhalok Rahman",
        },

        {
          id: 3,
          name: "DM Sem Final Questions",
          contributor: "Aisha H Chowdhury",
        },
      ],

      semester2: [
        {
          id: 1,
          name: "All TT questions",
          contributor: "Kaifa Tabassum",
        },

        {
          id: 2,
          name: "All Quiz Questions",
          contributor: "Zhalok Rahman",
        },

        {
          id: 3,
          name: "Semester Final Questions",
          contributor: "Aisha H Chowdhury",
        },
      ],
    };

    const projectlist = {
      semester1: [
        {
          id: 1,
          name: "Project1",
          type: "Android Application",
          Team: "Team A",
        },

        {
          id: 2,
          name: "Project2",
          type: "Android Application",
          Team: "Team B",
        },

        {
          id: 3,
          name: "Project3",
          type: "Android Application with React Native",
          Team: "Team C",
        },
      ],

      semester2: [
        {
          id: 1,
          name: "Project1",
          type: "Web Application",
          Team: "Team A",
        },

        {
          id: 2,
          name: "Project2",
          type: "Web Application",
          Team: "Team B",
        },

        {
          id: 3,
          name: "Project3",
          type: "Database Project",
          Team: "Team C",
        },
      ],
    };

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

    const nav_info = [
      { id: 1, title: "Login", link: "/login" },
      { id: 2, title: "Sign up", link: "/signup" },
    ];

    const { isLoggedIn, userEmail } = this.state;

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
              info={books}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
            />
          </Route>
          <Route path="/notes">
            <Notes
              nav_info={nav_info}
              info={notes}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
            />
          </Route>
          <Route path="/questions">
            <Questions
              nav_info={nav_info}
              info={questions}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
            />
          </Route>
          <Route path="/projects">
            <Projects
              nav_info={nav_info}
              info={projectlist}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
            />
          </Route>
          <Route path="/contribute">
            <Contribute
              nav_info={nav_info}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
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
          <Route path="/profile">
            <Profile
              nav_info={nav_info}
              loggedInState={isLoggedIn}
              handleLog={this.loginStateChanger}
              user={userEmail}
            />
          </Route>
        </div>
      </Router>
    );
  }
}
