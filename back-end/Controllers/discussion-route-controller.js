const discussionModel = require('../models/discussion_model');

const addDiscussion = (req, res, next) => {
	const {
		discussion_title,
		discussion_body,
		discussion_starters_name,
		discussion_starters_email,
	} = req.body;

	console.log({
		discussion_title,
		discussion_body,
		discussion_starters_name,
		discussion_starters_email,
	});

	const new_discussion = new discussionModel({
		title: discussion_title,
		body: discussion_body,
		discussion_starters_name: discussion_starters_name,
		discussion_starters_email: discussion_starters_email,
		votes: 0,
	});

	new_discussion.save((err, data) => {
		if (err) next(err);
		else res.json('discussion saved');
	});
};

const getAllDiscussions = () => {};

const getDiscussionByTitle = () => {};

const getDiscussionById = () => {};

const deleteDiscussion = () => {};

const updateDiscussion = () => {};

module.exports = {
	addDiscussion,
	getAllDiscussions,
	getDiscussionByTitle,
	getDiscussionById,
	deleteDiscussion,
	updateDiscussion,
};
