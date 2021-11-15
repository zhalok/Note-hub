const nodemailer = require('nodemailer');

const sendEmail = (req, res, next) => {
	const { contributorName, contributorEmail, contentName } = req.body;

	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.AUTH_EMAIL,
			pass: process.env.AUTH_PASS,
		},
	});

	var mailOptions = {
		from: process.env.AUTH_EMAIL,
		to: contributorEmail,
		subject: 'Requesting for content',
		text: `Hello ${contributorName}, Can you please give me the content ${contentName}`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			next(error);
		} else {
			res.json('email sent');
		}
	});
};

const sendNotificationEmail = (req, res, next) => {
	const { to, from, body, discussion_title } = req.body;
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.AUTH_EMAIL,
			pass: process.env.AUTH_PASS,
		},
	});

	var mailOptions = {
		from: process.env.AUTH_EMAIL,
		to,
		subject: `An answer was given to your discussion ${discussion_title} by ${from}`,
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

module.exports = { sendEmail, sendNotificationEmail };
