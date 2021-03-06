const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
	name: { type: String, required: true },
	session: { type: String, required: true },
	registration_id: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String },
	github: { type: String },
	linkedin: { type: String },
	verified: { type: Boolean, required: true },
});

module.exports = mongoose.model('User', user_schema);
