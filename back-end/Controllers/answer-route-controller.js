const answer_model = require('../models/answer_model');
const notificationProcessing = require('../Utils/notificationProcessing');

const answer = {};

answer.add_answer = (req, res, next) => {
	const {
		body,
		discussion_id,
		discussion_starters_email,
		discussion_title,
		answer_providers_name,
		answer_providers_id,
	} = req.body;

	const new_answer = new answer_model({
		body,
		discussion_id,
		answer_providers_name,
		answer_providers_id,
	});
	new_answer.save((err) => {
		if (err) next(err);
		else {
			const subject = `An answer was provided to your discussion ${discussion_title}`;

			notificationProcessing.send_email(
				subject,
				body,
				null,
				discussion_starters_email,
				(err) => {
					if (err) next(err);
					else res.json('Answer added and notification sent');
				}
			);
		}
	});
};

answer.get_answer = (req, res, next) => {
	const discussion_id = req.params.discussion_id;

	answer_model.find({ discussion_id }, (err, data) => {
		if (err) next(err);
		else {
			res.json(data);
		}
	});
};

answer.get_answer_by_contributorID = (req, res, next) => {
	const { contributor_id } = req.params;
	answer_model.find({ contributor_id }, (err, data) => {
		if (err) {
			next(err);
		} else {
			res.json(data);
		}
	});
};

answer.update_answer = (req, res, next) => {};

answer.delete_answer = (req, res, next) => {
	const { answer_id } = req.params;
	console.log(answer_id);
	answer_model.deleteOne({ _id: answer_id }, (err, docs) => {
		if (err) {
			next(err);
		} else {
			res.json('alright deleted');
		}
	});
};

module.exports = answer;
