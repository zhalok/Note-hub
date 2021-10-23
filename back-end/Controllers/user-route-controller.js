const { Mongoose } = require('mongoose');
const HttpError = require('../models/http-error-model');
const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');

const get_all_users = async (req, res, next) => {
	try {
		const users = await userModel.find({});
		if (!users) res.json('No users found');
		else res.json(users);
	} catch (err) {
		next(err);
	}
};

const get_user_by_id = async (req, res, next) => {
	// console.log(req.params.uid);
	var retinfo;
	try {
		const user = await userModel.find({ registration_id: req.params.uid });
		console.log(user);
		res.json(user);
	} catch (err) {
		next(err);
	}
};

// const get_users_by_name = (req, res, next) => {
//   let retinfo;
//   user.forEach((e) => {
//     if (e.name === req.params.name) {
//       retinfo = e;
//     }
//   });
//   if (!retinfo) {
//     throw new HttpError('User Not found by name', 404);
//   } else {
//     res.json(retinfo);
//   }
// };

const add_new_user = async (req, res, next) => {
	const {
		name,
		registration_id,
		session,
		password,
		email,
		phone,
		github,
		linkedin,
	} = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		console.log(hashedPassword);

		const data = await userModel.find({});

		let vacany = true;

		data.forEach((e) => {
			if (req.body.registration_id === e.registration_id) {
				vacany = false;
			}
		});

		if (vacany) {
			const new_user = new userModel({
				name,
				registration_id,
				session,
				phone,
				email,
				password: hashedPassword,
				github,
				linkedin,
				books: [],
				notes: [],
				questions: [],
				projects: [],
			});

			const result = await new_user.save();
			if (!result) res.json('There was a problem');
			else res.json(result);
		} else {
			res.json('User Already Registered');
		}
	} catch (err) {
		next(err);
	}
};

const update_user = async (req, res, next) => {
	const contributor_id = req.body.contributor_id;
	let founduser;
	try {
		const data = await userModel.find({ registration_id: contributor_id });
		const foundUser = data[0];
		if (foundUser) console.log(foundUser);

		const { name, semester, type } = req.body;

		const new_book = {
			name,
			semester,
		};

		foundUser[type].push(new_book);

		const user_id = founduser._id;

		userModel.findByIdAndUpdate(user_id, founduser, { new: true }, () => {
			console.log('Updated');
		});
	} catch (err) {
		next(err);
	}
};

const check_user_validity = (req, res, next) => {
	const { registration_id, password } = req.body;
	userModel.find({ registration_id }, (err, users) => {
		if (err) next(err);
		else {
			if (users.length) {
				const hashedPassword = users[0].password;
				bcrypt.compare(password, hashedPassword, (err, result) => {
					if (err) {
						next(err);
					} else {
						if (result) res.json(users[0]);
						else res.json('User not found');
					}
				});
			} else {
				res.json('User not found');
			}
		}
	});
};

module.exports = {
	get_all_users,
	get_user_by_id,
	// get_users_by_name,
	add_new_user,
	update_user,
	check_user_validity,
};
