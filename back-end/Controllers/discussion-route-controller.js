const discussion_model = require('../models/discussion_model');
const discussionModel = require('../models/discussion_model');

const addDiscussion = (req, res, next) => {
	const {
		discussion_title,
		discussion_body,
		discussion_starters_name,
		discussion_starters_email,
		discussion_starters_id,
	} = req.body;

	console.log(discussion_starters_id);

	const new_discussion = new discussionModel({
		title: discussion_title,
		body: discussion_body,
		discussion_starters_name: discussion_starters_name,
		discussion_starters_email: discussion_starters_email,
		discussion_starters_id: discussion_starters_id,

		votes: 0,
	});

	new_discussion.save((err) => {
		if (err) next(err);
		else res.json('discussion saved');
	});
};

const getAllDiscussions = (req, res, next) => {
	discussionModel.find({}, (err, discussions) => {
		if (err) next(err);
		else res.json(discussions);
	});
};

const getDiscussionByTitle = (req, res, next) => {
	const title = req.params.title;
	discussionModel.find({ discussion_title: title }, (err, discussion) => {
		if (err) next(err);
		else res.json(discussion);
	});
};

const getDiscussionById = (req, res, next) => {
	const _id = req.params.id;
	discussionModel.find({ _id }, (err, discussion) => {
		if (err) next(err);
		else res.json(discussion);
	});
};

const deleteDiscussion = (req, res, next) => {
	const _id = req.params.id;
	discussionModel.findByIdAndDelete(_id, (err) => {
		if (err) next(err);
		else res.json('discussion deleted');
	});
};

const get_discussion_by_contributorID = (req, res, next) => {
	const { contributor_id } = req.params;
	discussion_model.find(
		{ discussion_starters_id: contributor_id },
		(err, data) => {
			if (err) {
				next(err);
			} else {
				res.json(data);
			}
		}
	);
};

const updateDiscussion = () => {}; // pore implement korbo akhn na

module.exports = {
	addDiscussion,
	getAllDiscussions,
	getDiscussionByTitle,
	getDiscussionById,
	deleteDiscussion,
	updateDiscussion,
	get_discussion_by_contributorID,
};
