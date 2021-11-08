const mongoose = require('mongoose');

const discussion_schema = new mongoose.Schema({
	title: { type: String, required: true },
	discussion_starter_name: { type: String, required: true },
	discussion_starter_email: { type: String, required: true },
	up_votes: { type: Number },
	down_votes: { type: Number },
});

module.exports = mongoose.model('Discussions', discussion_schema);
