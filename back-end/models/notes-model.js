const mongoose = require('mongoose');

const note_schema = new mongoose.Schema({
	name: { type: String, required: true },
	semester: { type: String, required: true },
	type: { type: String, required: true },
	contributor_id: { type: String, required: true },
	contributor_name: { type: String, required: true },
	link: { type: String },
});

module.exports = mongoose.model('Notes', note_schema);
