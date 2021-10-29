const mongoose = require('mongoose');

const overview_schema = new mongoose.Schema({
	books: { type: Number },
	notes: { type: Number },
	questions: { type: Number },
	projects: { type: Number },
});

module.exports = mongoose.model('overview', overview_schema);
