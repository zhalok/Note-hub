const question_model = require("../models/questions-model");
const { update_user } = require("../Controllers/user-route-controller");

const get_questions_by_semester = async (req, res, next) => {
  const data = await question_model.find({});
  let retinfo = [];
  data.forEach((e) => {
    if (e.semester == req.params.sem) {
      retinfo.push(e);
    }
  });
  res.json(retinfo);
};

const get_questions_by_name = async (req, res, next) => {
  const data = await question_model.find({});
  const retinfo = [];
  data.forEach((e) => {
    if (e.name == req.params.name) {
      retinfo.push(e);
    }
  });
  if (retinfo.length == 0) res.json("No data found");
  else res.json(retinfo);
};

const get_all_questions = async (req, res, next) => {
  const data = await question_model.find({});
  res.json(data);
};

const add_new_question = async (req, res, next) => {
  const {
    name,
    semester,
    type,
    contributor_id,
    contributor_name,
    description,
  } = req.body;
  const new_question = new question_model({
    name,
    semester,
    type,
    contributor_id: contributor_id,
    contributor_name: contributor_name,
    description: description,
  });

  const result = await new_question.save();
  update_user(req, res, next);
  res.json(result);
};

module.exports = {
  add_new_question,
  get_all_questions,
  get_questions_by_name,
  get_questions_by_semester,
};
