const nodemailer = require('nodemailer');

const utils = {};

utils.send_email = (subject, body, from, to) => {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.AUTH_EMAIL,
			pass: process.env.AUTH_PASS,
		},
	});
	var mailOptions = {
		from: process.env.AUTH_EMAIL,
		to: to,
		subject: subject,
		text: body,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			next(error);
		} else {
			res.json('email sent');
		}
	});
};

module.exports = send_email;
