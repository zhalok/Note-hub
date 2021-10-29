const HttpError = require('../models/http-error-model');
const { update_user } = require('../Controllers/user-route-controller');
const note_model = require('..//models/notes-model');
const overview_model = require('../models/overview-model');

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
	try {
		const name = req.params.name;
		const data = await note_model.find({ name });
		res.json(data);
	} catch (err) {
		next(err);
	}
};

const get_all_notes = async (req, res, next) => {
	try {
		const data = await note_model.find({});
		res.json(data);
	} catch (err) {
		next(err);
	}
};

const add_new_note = async (req, res, next) => {
	const {
		name,
		semester,
		type,
		contributor_id,
		contributor_name,
		description,
		link,
	} = req.body;
	console.log(link);
	const new_note = new note_model({
		name,
		semester,
		type,
		contributor_id: contributor_id,
		contributor_name: contributor_name,
		description: description,
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
					res.json('saved');
				});
			} else {
				if (data[0].notes) data[0].notes++;
				else data[0].notes = 1;
				data[0].save((err) => {
					if (err) next(err);
					res.json('saved');
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
};
