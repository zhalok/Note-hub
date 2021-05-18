const HttpError = require("../models/http-error-model");
const { update_user } = require("../Controllers/user-route-controller");
const book_model = require("../models/projects-model");

const get_projects_by_semester = async (req, res, next) => {
  const data = await book_model.find({});
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

const get_projects_by_name = async (req, res, next) => {
  const data = await book_model.find({});
  const retinfo = [];
  data.forEach((e) => {
    if (e.name == req.params.name) {
      retinfo.push(e);
    }
  });
  if (retinfo.length == 0) res.json("No data found");
  else res.json(retinfo);
};

const get_all_projects = async (req, res, next) => {
  const data = await book_model.find({});
  if (data.length == 0) {
    res.json("No Data found");
  } else {
    res.json(data);
  }
};

const add_new_project = async (req, res, next) => {
  const { name, semester, type, registration_id, contributor } = req.body;
  const new_book = new book_model({
    name,
    semester,
    type,
    contributor_id: registration_id,
    contributor_name: contributor,
  });

  const result = await new_book.save();
  res.json(result);
};

module.exports = {
  get_all_projects,
  get_projects_by_name,
  get_projects_by_semester,
  add_new_project,
};
