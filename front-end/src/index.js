import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// hi
// if you are reading this I am assuming you know nothing about react but
// you have a good basic knowledge about vannila js and html
// so first of all what is react?
// react is basically a js framework for building web clientside applications
// why react? like we can follow the conventional html css js for building a fully responsive website
// thats the point when you are making a website its just a website
// but with react we can make a web application fetching apis and work with the datas
// and moreover you dont get the feeling of programming while you are doing html stuffs
// react provides you the exciting challege of solving tree problems while developing
// thats the beauty of react it provides a good developer experience

// on short how react works ?
// to explain that you need to know about DOM
// what is DOM ?
// DOM stands for Document Object Model
// like the html code you write which structures the whole website

// <body>
//    <div>
//        <div>

//        </div>
//        <div>

//        </div>
//    </div>
// </body>

// take this html code for example
// here the structure is like

//                     body
//                     /
//                    /
//                   div
//                   /\
//                  /  \
//                 div  div

// which is basically something you are quite familiar with
// its a tree right ?
// this is how the website structures work
// this is called DOM
// now when you are working with html you basically build this tree
// and with JS you manipulate different parts of it dynamically

// with the conventional way
// you will send a request to the server and the server will send you back an html
// file which your browse will render
// and when you will do any dynamic manipulation with js on the DOM tree
// the whole DOM tree will be regenerated

// this is the place where react comes to the play
// react generates a virtual DOM and works with it
// I am not getting in the depth of it
// for learning about this fundamental up to a quite knowledged position
// you may watch this video: https://youtu.be/2C5834qx0sA?list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr

// ok now let me get straight to the point
// react basically works with states thats the beauty of react
// whenever the state will change
// react virtual dom will re-render from the component of the DOM tree where the
// state change was made

// Sorry to make things so large :3

// you can learn react from the official doc: https://reactjs.org/docs/hello-world.html

// and for guidance you may watch this tutorial series: https://www.youtube.com/watch?v=2C5834qx0sA&list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr&index=2&ab_channel=LearnwithSumit-LWS-Bangladesh

// In case if you are looking for jobs and dont have the time learn everything in detais:
// https://www.youtube.com/watch?v=zIx9kFXdwlc&t=10s&ab_channel=LearnwithSumit-LWS-Bangladesh
