// hi welcome to book-route-controller.js

const { update_user } = require('../Controllers/user-route-controller');
const book_model = require('../models/books-model');
const overview_model = require('../models/overview-model');

// express application eventually run these functions for handling requests
// there are three parameters req res next
// first one is the req which recieves the request information
// second one is the res which revieves the response that is to be sent
// third one is the next which revieves a middleware which passes an information to the next active middleware
// ue mostly use the next middleware for passing errors to the error handling middleware
// now lets go for the mongoose models

// getting the books of a particular semester
const get_books_by_semester = async (req, res, next) => {
	try {
		const semester = req.params.sem;
		const data = await book_model.find({ semester });

		res.json(data);
	} catch (err) {
		next(err);
	}
};

// getting a particular book by name this api is mainly integrated in the search button
// however due to lack of time we couldnt implement the search button
// you can optimize this function if necessary and integrate it with the search button in the client side

const get_books_by_name = async (req, res, next) => {
	book_model.find({}, (err, bookData) => {
		if (err) next(err);
		else {
			const searchString = req.params.name;
			const searchResult = [];
			for (let i = 0; i < bookData.length; i++) {
				let foundString = bookData[i].name;
				if (processSearch(foundString, searchString))
					searchResult.push(bookData[i]);
			}
			res.json(searchResult);
		}
	});
};

// getting all the books

const get_all_books = (req, res, next) => {
	book_model.find({}, (err, books) => {
		if (err) {
			next(err);
		} else {
			res.json(books);
		}
	});
};

// getting books based on a contributor Id for showing in their profiles
const get_book_by_contributorID = (req, res, next) => {
	const { contributor_id } = req.params;
	book_model.find({ contributor_id }, (err, data) => {
		if (err) {
			next(err);
		} else {
			res.json(data);
		}
	});
};

// adding a new book
const add_new_book = async (req, res, next) => {
	console.log(req.file);
	const {
		name,
		semester,
		type,
		contributor_id,
		contributor_name,
		contributor_email,
		description,
		link,
	} = req.body;

	const new_book = new book_model({
		name,
		semester,
		type,
		contributor_id: contributor_id,
		contributor_name: contributor_name,
		contributor_email,
		description,
		link,
	});

	new_book.save((err, bookData) => {
		if (err) next(err);

		overview_model.find({}, (err, data) => {
			if (err) next(err);

			if (data.length == 0) {
				const new_overview = new overview_model({
					books: 1,
				});
				new_overview.save((err) => {
					if (err) next(err);
					update_user(
						{ contributor_id, type, content_name: name, semester },
						(data) => {
							res.json(data);
						}
					);
				});
			} else {
				if (data[0].books) data[0].books++;
				else data[0].books = 1;
				data[0].save((err) => {
					if (err) next(err);
					else {
						res.json(true);
					}
					// update_user(
					// 	{ contributor_id, type, content_name: name, semester },
					// 	(err, data) => {
					// 		if (err) next(err);
					// 		res.json(data);
					// 	}
					// );
				});
			}
		});
	});
};

// deleteing a book
const delete_book = (req, res, next) => {
	const { id } = req.params;
	book_model.findByIdAndDelete(id, (err, docs) => {
		if (err) {
			next(err);
		} else {
			res.json(docs);
		}
	});
};

exports.get_books_by_semester = get_books_by_semester;
exports.add_new_book = add_new_book;
exports.get_books_by_name = get_books_by_name;
exports.get_all_books = get_all_books;
exports.get_book_by_contributorID = get_book_by_contributorID;
exports.delete_book = delete_book;
