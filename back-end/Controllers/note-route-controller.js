const HttpError = require('../models/http-error-model');
const { update_user } = require('../Controllers/user-route-controller');
const note_model = require('..//models/notes-model');
const overview_model = require('../models/overview-model');
const { processSearch } = require('../Utils/searchProcessing');

const get_notes_by_semester = async (req, res, next) => {
	try {
		const semester = req.params.sem;
		const data = await note_model.find({ semester });

		res.json(data);
	} catch (err) {
		next(err);
	}
};

const get_notes_by_name = async (req, res, next) => {
	note_model.find({}, (err, noteData) => {
		if (err) next(err);
		else {
			const searchString = req.params.name;
			const searchResult = [];
			for (let i = 0; i < noteData.length; i++) {
				let foundString = noteData[i].name;
				if (processSearch(foundString, searchString))
					searchResult.push(noteData[i]);
			}
			res.json(searchResult);
		}
	});
};

const get_all_notes = async (req, res, next) => {
	try {
		const data = await note_model.find({});
		res.json(data);
	} catch (err) {
		next(err);
	}
};

const get_notes_by_contributorID = (req, res, next) => {
	const { contributor_id } = req.params;
	note_model.find({ contributor_id }, (err, data) => {
		if (err) {
			next(err);
		} else {
			res.json(data);
		}
	});
};

const add_new_note = async (req, res, next) => {
	console.log(req.file);
	const {
		name,
		semester,
		type,
		contributor_id,
		contributor_name,
		contributor_email,
		description,
		link,
	} = req.body;
	console.log(link);
	const new_note = new note_model({
		name,
		semester,
		type,
		contributor_id,
		contributor_name,
		contributor_email,
		description,
		link,
	});
	console.log(new_note);
	new_note.save((err) => {
		if (err) next(err);

		overview_model.find({}, (err, data) => {
			if (err) next(err);
			if (data.length == 0) {
				const new_overview = new overview_model({
					notes: 1,
				});
				new_overview.save((err) => {
					if (err) next(err);
					update_user(
						{ contributor_id, type, content_name: name, semester },
						(data) => {
							res.json(data);
						}
					);
				});
			} else {
				if (data[0].notes) data[0].notes++;
				else data[0].notes = 1;
				data[0].save((err) => {
					if (err) next(err);
					update_user(
						{ contributor_id, type, content_name: name, semester },
						(data) => {
							res.json(data);
						}
					);
				});
			}
		});
	});
};

module.exports = {
	get_all_notes,
	get_notes_by_name,
	get_notes_by_semester,
	add_new_note,
	get_notes_by_contributorID,
};
