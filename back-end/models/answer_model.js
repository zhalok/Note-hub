const mongoose = require('mongoose');

const answer_schema = new mongoose.Schema({
	answer_providers_name: { type: String, required: true },
	answer_providers_id: { type: String, required: true },
	body: { type: String, required: true },
	discussion_id: { type: String, required: true },
});

module.exports = mongoose.model('answers', answer_schema);
