const mongoose = require('mongoose');
// mongoose is a noSql database that means you dont need any specific structure to
// work with datas
// however its necessary to maintain a specific data model
// for this mongoose provides something called mongoose Schema
// mongoose Schema enforces us to create our data according to the data model for storing in the database
// every Schema of mongoose creates a specific collection in mongoDB

const book_schema = new mongoose.Schema({
	name: { type: String, required: true },
	semester: { type: String, required: true },
	type: { type: String, required: true },
	contributor_id: { type: String, required: true },
	contributor_name: { type: String, required: true },
	contributor_email: { type: String, required: true },
	description: { type: String },
	link: { type: String },
});

module.exports = mongoose.model('Books', book_schema);
