const nodemailer = require('nodemailer');

const notificationProcessing = {};

notificationProcessing.send_email = (subject, body, from, to, callback) => {
	// console.log(subject);
	// console.log(body);
	// console.log(to);
	// console.log(callback);
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

	transporter.sendMail(mailOptions, function (error) {
		if (error) {
			callback(error);
		} else {
			callback(null);
		}
	});
};

module.exports = notificationProcessing;
