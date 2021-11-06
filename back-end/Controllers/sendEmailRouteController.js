const nodemailer = require('nodemailer');

const sendEmail = (req, res, next) => {
	console.log('here i am ');
	console.log(req.body);
	const { contributorName, contributorEmail, contentName } = req.body;

	console.log(process.env.AUTH_EMAIL);

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

module.exports = { sendEmail };
