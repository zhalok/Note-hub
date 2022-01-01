const notificationProcessing = require('../Utils/notificationProcessing');

// sending emails
const sendEmail = (req, res, next) => {
	const { contributorName, contributorEmail, contentName, contentType } =
		req.body;
	console.log(contentType);

	const to = contributorEmail;
	const subject = 'Requesting for content';
	const body = `Hello ${contributorName}, Can you please give me the ${contentType} ${contentName}`;

	notificationProcessing.send_email(subject, body, null, to, (err) => {
		if (err) next(err);
		else res.json('email sent');
	});
};

// sending notification
const sendNotificationEmail = (req, res, next) => {
	const { to, body, title } = req.body;

	notificationProcessing.send_email(title, body, null, to, (err) => {
		if (err) next(err);
		else res.json('notification sent through an email');
	});
};

module.exports = { sendEmail, sendNotificationEmail };
