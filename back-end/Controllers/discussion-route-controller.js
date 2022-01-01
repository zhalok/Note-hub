const discussion_model = require('../models/discussion_model');
const discussionModel = require('../models/discussion_model');

// adding a discussion
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

// getting all discussions
const getAllDiscussions = (req, res, next) => {
	discussionModel.find({}, (err, discussions) => {
		if (err) next(err);
		else res.json(discussions);
	});
};

// getting discussion by title
// these api wasnt also integrated in the search button
// you may work with its completetion
const getDiscussionByTitle = (req, res, next) => {
	const title = req.params.title;
	discussionModel.find({ discussion_title: title }, (err, discussion) => {
		if (err) next(err);
		else res.json(discussion);
	});
};

// getting discussion by particular Id this api wasnt also integrated anywhere in the client
// we didnt feel necessary for our client
// however we have created the api
const getDiscussionById = (req, res, next) => {
	const _id = req.params.id;
	discussionModel.find({ _id }, (err, discussion) => {
		if (err) next(err);
		else res.json(discussion);
	});
};

// deleting a particular discussion
const deleteDiscussion = (req, res, next) => {
	const _id = req.params.id;
	discussionModel.findByIdAndDelete(_id, (err) => {
		if (err) next(err);
		else res.json('discussion deleted');
	});
};

// getting discussion based on contributor id
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

// this api was for editing the discussion in the client
// however it wasnt implemented
const updateDiscussion = () => {};

module.exports = {
	addDiscussion,
	getAllDiscussions,
	getDiscussionByTitle,
	getDiscussionById,
	deleteDiscussion,
	updateDiscussion,
	get_discussion_by_contributorID,
};
