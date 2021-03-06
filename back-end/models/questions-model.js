const mongoose = require('mongoose');

const question = new mongoose.Schema({
	name: { type: String, required: true },
	semester: { type: String, required: true },
	type: { type: String, required: true },
	contributor_id: { type: String, required: true },
	contributor_name: { type: String, required: true },
	contributor_email: { type: String, required: true },
	description: { type: String },
	link: { type: String },
});

module.exports = mongoose.model('Questions', question);
