const answer_model = require('../models/answer_model');
const notificationProcessing = require('../Utils/notificationProcessing');

const answer = {};

answer.add_answer = (req, res, next) => {
	const { body, discussion_id, discussion_starters_email, discussion_title } =
		req.body;
	const new_answer = new answer_model({
		body,
		discussion_id,
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
	console.log(discussion_id);
	answer_model.find({ discussion_id }, (err, data) => {
		if (err) next(err);
		else {
			console.log('yes data fetched');
			res.json(data);
		}
	});
};

answer.update_answer = (req, res, next) => {};

answer.delete_answer = (req, res, next) => {};

module.exports = answer;
