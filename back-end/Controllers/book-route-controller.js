const HttpError = require('../models/http-error-model');
const { update_user } = require('../Controllers/user-route-controller');
const book_model = require('../models/books-model');
const overview_model = require('../models/overview-model');

const get_books_by_semester = async (req, res, next) => {
	try {
		const semester = req.params.sem;
		const data = await book_model.find({ semester });

		res.json(data);
	} catch (err) {
		next(err);
	}
};

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

const get_all_books = async (req, res, next) => {
	try {
		const data = await book_model.find({});
		// res.json({ books: data.map((e) => e.toObject({ getters: true })) });
		res.json(data);
	} catch (err) {
		next(err);
	}
};

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
					update_user(
						{ contributor_id, type, content_name: name, semester },
						(err, data) => {
							if (err) next(err);
							res.json(data);
						}
					);
				});
			}
		});
	});
};

exports.get_books_by_semester = get_books_by_semester;
exports.add_new_book = add_new_book;
exports.get_books_by_name = get_books_by_name;
exports.get_all_books = get_all_books;
