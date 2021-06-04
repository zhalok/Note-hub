const HttpError = require("../models/http-error-model");
const { update_user } = require("../Controllers/user-route-controller");
const note_model = require("..//models/notes-model");

const get_notes_by_semester = async (req, res, next) => {
  const data = await note_model.find({});
  let retinfo = [];
  data.forEach((e) => {
    if (e.semester == req.params.sem) {
      retinfo.push(e);
    }
  });
  if (retinfo.length == 0) {
    res.json("No data has been found");
  } else {
    res.json(retinfo);
  }
};

const get_notes_by_name = async (req, res, next) => {
  const data = await note_model.find({});
  const retinfo = [];
  data.forEach((e) => {
    if (e.name == req.params.name) {
      retinfo.push(e);
    }
  });
  if (retinfo.length == 0) res.json("No data found");
  else res.json(retinfo);
};

const get_all_notes = async (req, res, next) => {
  const data = await note_model.find({});
  if (data.length == 0) {
    res.json("No Data");
  } else {
    res.json(data);
  }
};

const add_new_note = async (req, res, next) => {
  const { name, semester, type, registration_id, contributor } = req.body;
  const new_note = new note_model({
    name,
    semester,
    type,
    contributor_id: registration_id,
    contributor_name: contributor,
  });

  const result = await new_note.save();
  update_user(req, res, next);
  res.json(result);
};

module.exports = {
  get_all_notes,
  get_notes_by_name,
  get_notes_by_semester,
  add_new_note,
};
