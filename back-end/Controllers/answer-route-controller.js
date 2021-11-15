const answer_model = require('../models/answer_model');

const answer = {};

answer.add_answer = (req, res, next) => {
	const { answer_providers_name, body, discussion_id } = req.body;
	const new_answer = new answer_model({
		answer_providers_name,
		body,
		discussion_id,
	});
	new_answer.save((err) => {
		if (err) next(err);
		else {
			res.json('answer added');
		}
	});
};

answer.get_answer = (req, res, next) => {};

answer.update_answer = (req, res, next) => {};

answer.delete_answer = (req, res, next) => {};

module.exports = answer;
