const nodemailer = require('nodemailer');

const notificationProcessing = {};

// sending email using nodemailer service

notificationProcessing.send_email = (subject, body, from, to, callback) => {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.AUTH_EMAIL, // provide the credentials of the mail adress you want to use for sending the email
			pass: process.env.AUTH_PASS,
		},
	});
	var mailOptions = {
		from: process.env.AUTH_EMAIL,
		to: to,
		subject: subject,
		text: body,
	};

	transporter.sendMail(mailOptions, function (error) {
		if (error) {
			callback(error);
		} else {
			callback(null);
		}
	});
};

module.exports = notificationProcessing;
