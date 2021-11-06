const question_model = require('../models/questions-model');
const { update_user } = require('../Controllers/user-route-controller');
const overview_model = require('../models/overview-model');

const get_questions_by_semester = async (req, res, next) => {
	try {
		const semester = req.params.sem;
		const data = await question_model.find({ semester });

		res.json(data);
	} catch (err) {
		next(err);
	}
};

const get_questions_by_name = async (req, res, next) => {
	question_model.find({}, (err, questionData) => {
		if (err) next(err);
		else {
			const searchString = req.params.name;
			const searchResult = [];
			for (let i = 0; i < questionData.length; i++) {
				let foundString = questionData[i].name;
				if (processSearch(foundString, searchString))
					searchResult.push(questionData[i]);
			}
			res.json(searchResult);
		}
	});
};

const get_all_questions = async (req, res, next) => {
	try {
		const data = await question_model.find({});
		res.json(data);
	} catch (err) {
		next(err);
	}
};

const add_new_question = async (req, res, next) => {
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
	const new_question = new question_model({
		name,
		semester,
		type,
		contributor_id,
		contributor_name,
		contributor_email,
		description,
		link,
	});
	new_question.save((err) => {
		if (err) next(err);

		overview_model.find({}, (err, data) => {
			if (err) next(err);
			if (data.length == 0) {
				const new_overview = new overview_model({
					questions: 1,
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
				if (data[0].questions) data[0].questions++;
				else data[0].questions = 1;
				data[0].save((err) => {
					if (err) next(err);
					update_user(
						{ contributor_id, type, content_name: name, semester },
						(data) => {
							res.json(data);
						}
					);
				});
			}
		});
	});
};

module.exports = {
	add_new_question,
	get_all_questions,
	get_questions_by_name,
	get_questions_by_semester,
};
