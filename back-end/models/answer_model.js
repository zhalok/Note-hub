const mongoose = require('mongoose');

const answer_schema = new mongoose.Schema({});

module.exports = mongoose.model('answers', answer_schema);
