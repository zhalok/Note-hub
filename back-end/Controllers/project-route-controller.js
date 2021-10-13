const HttpError = require('../models/http-error-model');
const { update_user } = require('../Controllers/user-route-controller');
const project_model = require('../models/projects-model');

const get_projects_by_semester = async (req, res, next) => {
  try {
    const semester = req.params.sem;
    const data = await project_model.find({ semester });

    res.json(data);
  } catch (err) {
    next(err);
  }
};

const get_projects_by_name = async (req, res, next) => {
  try {
    const name = req.params.name;
    const data = await project_model.find({ name });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const get_all_projects = async (req, res, next) => {
  try {
    const data = await project_model.find({});
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const add_new_project = async (req, res, next) => {
  const {
    name,
    semester,
    type,
    contributor_id,
    contributor_name,
    description,
  } = req.body;
  const new_project = new project_model({
    name,
    semester,
    type,
    contributor_id: contributor_id,
    contributor_name: contributor_name,
    description: description,
  });
  try {
    const result = await new_project.save();
    // update_user(req, res, next);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  get_all_projects,
  get_projects_by_name,
  get_projects_by_semester,
  add_new_project,
};
