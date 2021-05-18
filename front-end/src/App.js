import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Contribute from "./pages/Contribute";
import Books from "./pages/Books";
import Project from "./pages/Projects";
import Notes from "./pages/Notes";
import Questions from "./pages/Questions";

import React from "react";
export default class App extends React.Component {
  state = {
    isLoggedin: "true",
  };

  render() {
    const books = {
      semester1: [
        {
          id: 1,
          name: "Vector Analysis",
          author: "author1",
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
        { id: 1, name: "Calculus Notes", contributor: "Kaifa Tabassum" },
        { id: 2, name: "DS notes", contributor: "Zhalok Rahman" },
        { id: 3, name: "Physics notes", contributor: "Aisha H Chowdhury" },
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
          name: "Sem Final Questions",
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

    const nav_info = [
      { id: 1, title: "Log in", link: "/login" },
      { id: 2, title: "Sign up", link: "/signup" },
    ];

    const { isLoggedin } = this.state;

    return (
      <Router>
        <div>
          <Route path="/" exact>
            <Welcome nav_info={nav_info} />
          </Route>
          <Route path="/login">
            <Login nav_info={nav_info} />
          </Route>
          <Route path="/signup">
            <Signup nav_info={nav_info} />
          </Route>
          <Route path="/contribute">
            <Contribute nav_info={nav_info} loggedinstate={isLoggedin} />
          </Route>
          <Route path="/books">
            <Books info={books} nav_info={nav_info} />
          </Route>
          <Route path="/projects">
            <Project nav_info={nav_info} info={projectlist} />
          </Route>
          <Route path="/notes">
            <Notes nav_info={nav_info} notes={notes} />
          </Route>
          <Route path="/questions">
            <Questions nav_info={nav_info} info={questions} />
          </Route>
        </div>
      </Router>
    );
  }
}
