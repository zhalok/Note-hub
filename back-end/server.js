/* ---------------------------------------------------------------------------------------------------------- */
/*hi I am adding the docs so that you can understand my work when you are watching this codebase 
however its definelty not possible to write the functionality of every functions 
in documentation 
first of all it wont increase your ability to think 
secondly its so unefficient 
Most of the sutffs of each directory are quite the same 
So I will try to explain one file from each directory 

Please follow this order when you are reading the docs 

--> Server.js --> routes/book-route.js --> controllers/book-route-controller.js --> models/book-model.js
*/
/* ---------------------------------------------------------------------------------------------------------- */

// hi welcome to server.js file
// this is the root of the whole back end
// we will import different express routes and call them on different api endpoints

const express = require('express');
const dotenv = require('dotenv');
const app = express();
const books_route = require('./routes/books-route');
const notes_route = require('./routes/notes-route');
const projects_route = require('./routes/projects-route');
const user_route = require('./routes/user-route');
const login_route = require('./routes/login-route');
const signup_route = require('./routes/signup-route');
const overview_route = require('./routes/overview-route');
const sendEmailROute = require('./routes/send-email-route');
const discussionRoute = require('./routes/discussion-route');
const answerRoute = require('./routes/answer-route');
const adminRoute = require('./routes/admin-route');
const questions_route = require('./routes/questions-route');
const contribute_route = require('./routes/contribute-route');

// here we have imported all the express routes

dotenv.config();
// dotenv package is necessary for accessing .env files
// .env files are those files where we keep our secret informations such as our credentials

const mongoose = require('mongoose');
// as we are using mongoDB as the database so instead of
// directly going through the mongo database we are using an npm package named mongoose
// mongoose provides us a database schema and we make our database model according to that
// and also mongoose provides us all the necessary functions for doing CRUD (Create Read Update Delete) operations
// in our mongoDB database

const cors = require('cors');
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// CORS (Cross Origin Resource Sharing) Policy is a policy between two applications sharing their data
// Suppose we have done all the interaction with the database using Node JS but we are requiiring that data
// from our client side which was build with react
// So as you can see our react application is asking for data from the node js application
// thats where things mess up a little normally you are not allowed to do that and you will be shown an error
// because while you are developing you are running your node js application and the react application on same machine (localhost)
// so it rejects to send a request to itself

// if you visit the link then you will find similar writing there
// Cross-Origin Resource Sharing (CORS)
// Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to
// indicate any origins (domain, scheme, or port)
// other than its own from which a browser should permit loading resources.

// so as you can see if you have this cors package installed and working fine then your react app wont have
// any problems fetching data from the node app while both of them running on the same machine <3

// I have writen it so long because this is a part where newbie developers face a lot confusions

// for more detailed information about this error:
// https://stackoverflow.com/questions/58372337/how-to-fix-cors-error-request-doesnt-pass-access-control-check?noredirect=1&lq=1
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

// after requiring the cors npm package what we get is an Express Middleware
// we have to get the Middleware in use just like all the other middlewares

app.use(cors());
// cors middleware in use

// also we have to set some headers to our response

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow_Headers', '*');
	res.setHeader('Access-Control-Allow-Methods', '*');
	next();
});

// when the client side recieves the response with these headers then it allows the data to be fetched from the same machine
// to the same machine ( from node app to react app running on the same machine )

app.use(express.json());
// in express there are some built-in middlewares express.json() provides one of them
// I have been talking a lot about middlewares and middleware is something that you will hear a lot while
// working with node.
// middlewares are basically some functions that are called in between a process of handling a request and response
// like suppose you have made a request

// what express.json() does is that while working with json request and responses express.json() middleware
// does all the necessary conversions needed
// if you had ever worked with Raw node js application then you would see that the server created by http module of node
// recieves a request body as buffer
// I am not getting in to that part but express.json() helps you get rid of these redaundant problems
// if you wanna see how a Raw node js projec looks like without using express middlewares
// you can have a look here : https://github.com/zhalok/Raw-NodeJS-practice-project-1
// I did this a long time ago doesnt know whether it works or not now :3
// although it wasted served live but you can get an idea how raw node js application looks like

// at this part we are basically connecting our application to our mongoDB
// we have used the mongoDB cloud service (MongoDB Atlas) instead of running it on our local machine
// although in professional level you may need to look for a most cost efficient approach but for the
// course projects if you are working with Mongo then MongoDB atlas will be good choce
mongoose
	.connect(
		// mongoose.connect() is the function that does the part of connecting your app with the database server
		// for more https://mongoosejs.com/docs/connections.html

		// I havent writen the password directly instead I have it on a hidden config variable which is
		// accessed with process.env
		// please keep your .env file in the .gitignore file
		`mongodb+srv://zhalok:${process.env.DB_PASS}@cluster0.gtdwt.mongodb.net/Database1?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true, // here are some options that we have to add due to some deprications
			useFindAndModify: true, // these deprications are dynamic while I was working I faced some deprications
			useCreateIndex: true, // which were solved by adding these options
			useUnifiedTopology: true, // Quick reminder: In JS whenever Im talking about options I am basically talking about an object
		}
		// while you will be working first try to connect the database without adding any sort of options to it
		// the your terminal will automatically show you which options you have to add
		// altough it will run just fine but it will always give you warning
	)
	.then(() => {
		console.log('Connected to database!');
	})
	.catch(() => {
		console.log('Connection failed!');
	});

// here this is an in general route if you hit the url with no endpoints with any method
// you will be hitting this function
// for more : https://expressjs.com/en/api.html#app
// app.get() app.post() these are provided directly by express
// if you wonder how may the project look like without them :)
// here have a look : https://github.com/zhalok/Raw-NodeJS-practice-project-1/blob/main/helpers/reqhandler.js
// app.all() serves requests of all methods
app.all('/', (req, res, next) => {
	console.log('hello');
	res.json('Hello client');
});

// here we are using the express router middlewares
app.use('/books', books_route);
app.use('/notes', notes_route);
app.use('/questions', questions_route);
app.use('/projects', projects_route);
app.use('/contribute', contribute_route);
app.use('/users', user_route);
app.use('/login', login_route);
app.use('/signup', signup_route);
app.use('/overview', overview_route);
app.use('/sendEmail', sendEmailROute);
app.use('/discussions', discussionRoute);
app.use('/answers', answerRoute);
app.use('/admin', adminRoute);

// console.log(process.env.NAME);

app.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error);
	}
	// this is a special middleware which recieves 4 parameters with error at first
	// this is a middleware for handling all the errors

	res.status(error.code);
	res.json({ message: error.message });
});

const port = process.env.PORT || 5000;

// with app.listen we start the application
app.listen(port, () => {
	console.log(port);
});

// alright lets go to the routes
// I will follow the BFS style btw :3
// first of all what is route ?
// route is basically a structural way to build a node js server app
// what I have done is like if you hit the api route /books/get_all
// you will call a function which will retive the data from the MongoDB and then send you as responses
// I could have done this by writing only this code -->

// app.get('/books/get_all', (req, res, next) => {
// 	const get_all_books = (req, res, next) => {
// 		book_model.find({}, (err, books) => {
// 			if (err) {
// 				next(err);
// 			} else {
// 				res.json(books);
// 			}
// 		});
// 	};
// });

// but if I keep doing this with all my apis then it will look disastrous on the server.js file
// so we basically follow a structure in node js application
// we define the routes that which express router should be called on request routes
// then we define the expess routers that on which endpoints which functions should be called
// e.g: we are working with users suppose
// now we need to save new user and get some users
// to save an user we may call /user/save route
// and to get an user we may call /user/:id or /user/all

/* quick reminder
express router is a sub_application of an express application
*/
