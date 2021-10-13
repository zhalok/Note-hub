const HttpError = require('../models/http-error-model');
const { update_user } = require('../Controllers/user-route-controller');
const book_model = require('../models/books-model');

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
  try {
    const name = req.params.name;
    console.log(name);
    const data = await book_model.find({ name });
    res.json(data);
  } catch (err) {
    next(err);
  }
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
  const {
    name,
    semester,
    type,
    contributor_id,
    contributor_name,
    description,
  } = req.body;

  const new_book = new book_model({
    name,
    semester,
    type,
    contributor_id: contributor_id,
    contributor_name: contributor_name,
    description: description,
  });
  try {
    const result = await new_book.save();
    // update_user(req, res, next);
    console.log('ok done');
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.get_books_by_semester = get_books_by_semester;
exports.add_new_book = add_new_book;
exports.get_books_by_name = get_books_by_name;
exports.get_all_books = get_all_books;
