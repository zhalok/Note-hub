const book_model = require('../models/books-model');
const note_model = require('../models/notes-model');
const question_model = require('../models/questions-model');
const project_model = require('../models/projects-model');
const user_model = require('../models/user-model');
const discussion_model = require('../models/discussion_model');

// this api is not optimized please dont use it
// rather go to the model directory there you will find a model named as overview model
// try to use that overview model to have an optimization in the system
// we will work on it later but for now on this is just like this
// this api is basically for the dashboard

const getOverview = (req, res, next) => {
	book_model.find({}, (err, books) => {
		if (err) next(err);
		else {
			note_model.find({}, (err, notes) => {
				if (err) next(err);
				else {
					question_model.find({}, (err, questions) => {
						if (err) next(err);
						else {
							project_model.find({}, (err, projects) => {
								if (err) next(err);
								else {
									user_model.find({}, (err, users) => {
										if (err) next(err);
										else {
											discussion_model.find({}, (err, discussions) => {
												if (err) next(err);
												else {
													const overview = {
														books: books.length,
														notes: notes.length,
														questions: questions.length,
														projects: projects.length,
														discussions: discussions.length,
														users: users.length,
													};
													res.json(overview);
												}
											});
										}
									});
								}
							});
						}
					});
				}
			});
		}
	});
};

module.exports = { getOverview };
