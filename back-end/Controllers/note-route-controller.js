const HttpError = require('../models/http-error-model');
const { update_user } = require('../Controllers/user-route-controller');
const note_model = require('..//models/notes-model');

const get_notes_by_semester = async (req, res, next) => {
  try {
    const semester = req.params.sem;
    const data = await note_model.find({ semester });

    res.json(data);
  } catch (err) {
    next(err);
  }
};

const get_notes_by_name = async (req, res, next) => {
  try {
    const name = req.params.name;
    const data = note_model.find({ name });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const get_all_notes = async (req, res, next) => {
  try {
    const data = await note_model.find({});
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const add_new_note = async (req, res, next) => {
  const {
    name,
    semester,
    type,
    contributor_id,
    contributor_name,
    description,
  } = req.body;

  const new_note = new note_model({
    name,
    semester,
    type,
    contributor_id: contributor_id,
    contributor_name: contributor_name,
    description: description,
  });
  console.log(new_note);
  try {
    const result = await new_note.save();
    // update_user(req, res, next);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  get_all_notes,
  get_notes_by_name,
  get_notes_by_semester,
  add_new_note,
};
