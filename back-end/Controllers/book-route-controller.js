const HttpError = require('../models/http-error-model');
const { update_user } = require('../Controllers/user-route-controller');
const book_model = require('../models/books-model');

const get_books_by_semester = async (req, res, next) => {
  try {
    const data = await book_model.find({});
    let retinfo = [];
    data.forEach((e) => {
      if (e.semester == req.params.sem) {
        retinfo.push(e);
      }
    });
    res.json(retinfo);
  } catch (err) {
    next(err);
  }
};

const get_books_by_name = async (req, res, next) => {
  try {
    const data = await book_model.find({});
    const retinfo = [];
    data.forEach((e) => {
      if (e.name == req.params.name) {
        retinfo.push(e);
      }
    });
    if (retinfo.length == 0) res.json('No data found');
    else res.json(retinfo);
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
    update_user(req, res, next);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.get_books_by_semester = get_books_by_semester;
exports.add_new_book = add_new_book;
exports.get_books_by_name = get_books_by_name;
exports.get_all_books = get_all_books;
