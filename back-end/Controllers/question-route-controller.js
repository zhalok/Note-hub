const question_model = require('../models/questions-model');
const { update_user } = require('../Controllers/user-route-controller');
const overview_model = require('../models/overview-model');

// all the functionalites here are as the same as other routes
// visit the book route controller for detailed explanation

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

const get_questions_by_contributorID = (req, res, next) => {
	const { contributor_id } = req.params;
	question_model.find({ contributor_id }, (err, data) => {
		if (err) {
			next(err);
		} else {
			res.json(data);
		}
	});
};

const add_new_question = async (req, res, next) => {
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
	new_question.save((err, data) => {
		if (err) {
			next(err);
		} else {
			res.json(data);
		}
	});
};

const delete_questions = (req, res, next) => {
	const { id } = req.params;
	question_model.findByIdAndDelete(id, (err, docs) => {
		if (err) {
			next(err);
		} else {
			res.json(docs);
		}
	});
};

module.exports = {
	add_new_question,
	get_all_questions,
	get_questions_by_name,
	get_questions_by_semester,
	get_questions_by_contributorID,
	delete_questions,
};
