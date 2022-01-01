const admin_model = require('../models/admin_model');
const user_model = require('../models/user-model');
const { send_email } = require('../Utils/notificationProcessing');

const check_admin_validty = (req, res, next) => {
	const { username, password } = req.body;
	// res.json('ok fine');
	admin_model.find({ username, password }, (err, admins) => {
		if (err) {
			next(err);
		} else {
			if (admins.length == 0) res.json(false);
			else res.json(true);
		}
	});
};

const create_new_admin = (req, res, next) => {
	const { username, password } = req.body;

	const new_admin = new admin_model({
		username,
		password,
	});

	new_admin.save((err) => {
		if (err) {
			next(err);
		} else {
			res.json('admin added');
		}
	});
};

// this function updates the verified key of a particular user document
const verify_user = (req, res, next) => {
	const { registration_id, email } = req.body;

	// console.log(registration_id);

	user_model.find({ registration_id }, (err, users) => {
		if (err) {
			next(err);
		} else {
			const user = users[0];
			if (user) {
				// console.log(user);
				user.verified = true; // this part
				user.save((err) => {
					if (err) {
						next(err);
					} else {
						send_email(
							'Registration verification',
							'Your request has been approved',
							null,
							email,
							(err) => {
								if (!err) {
									res.json('User Verified');
								} else next(err);
							}
						);
					}
				});
			}
		}
	});
};

const delete_user_request = (req, res, next) => {
	const { registration_id, email } = req.body;
	user_model.find({ registration_id }, (err, users) => {
		if (err) {
			next(err);
		} else {
			if (users.length) {
				let user = users[0];
				user.delete({ registration_id }, (err) => {
					if (err) {
						next(err);
					} else {
						res.json('Request has been deleted');
					}
				});
			}
		}
	});
};

module.exports = {
	check_admin_validty,
	create_new_admin,
	verify_user,
	delete_user_request,
};
