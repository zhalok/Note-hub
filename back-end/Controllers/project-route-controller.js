const HttpError = require('../models/http-error-model');
const { update_user } = require('../Controllers/user-route-controller');
const project_model = require('../models/projects-model');
const overview_model = require('../models/overview-model');

const get_projects_by_semester = async (req, res, next) => {
	try {
		const semester = req.params.sem;
		const data = await project_model.find({ semester });

		res.json(data);
	} catch (err) {
		next(err);
	}
};

const get_projects_by_name = async (req, res, next) => {
	project_model.find({}, (err, projectData) => {
		if (err) next(err);
		else {
			const searchString = req.params.name;
			const searchResult = [];
			for (let i = 0; i < projectData.length; i++) {
				let foundString = projectData[i].name;
				if (processSearch(foundString, searchString))
					searchResult.push(projectData[i]);
			}
			res.json(searchResult);
		}
	});
};

const get_all_projects = async (req, res, next) => {
	try {
		const data = await project_model.find({});
		res.json(data);
	} catch (err) {
		next(err);
	}
};

const get_projects_by_contributorID = (req, res, next) => {
	const { contributor_id } = req.params;
	project_model.find({ contributor_id }, (err, data) => {
		if (err) {
			next(err);
		} else {
			res.json(data);
		}
	});
};

const add_new_project = async (req, res, next) => {
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
	const new_project = new project_model({
		name,
		semester,
		type,
		contributor_id,
		contributor_name,
		contributor_email,
		description,
		link,
	});
	new_project.save((err) => {
		if (err) next(err);

		overview_model.find({}, (err, data) => {
			if (err) next(err);
			if (data.length == 0) {
				const new_overview = new overview_model({
					projects: 1,
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
				if (data[0].projects) data[0].projects++;
				else data[0].projects = 1;
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
	get_all_projects,
	get_projects_by_name,
	get_projects_by_semester,
	add_new_project,
	get_projects_by_contributorID,
};
