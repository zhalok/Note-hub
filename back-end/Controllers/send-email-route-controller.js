const notificationProcessing = require('../Utils/notificationProcessing');

const sendEmail = (req, res, next) => {
	const { contributorName, contributorEmail, contentName } = req.body;

	const to = contributorEmail;
	const subject = 'Requesting for content';
	const body = `Hello ${contributorName}, Can you please give me the content ${contentName}`;

	notificationProcessing.send_email(subject, body, null, to, (err) => {
		if (err) next(err);
		else res.json('email sent');
	});
};

const sendNotificationEmail = (req, res, next) => {
	const { to, body, title } = req.body;

	notificationProcessing.send_email(title, body, null, to, (err) => {
		if (err) next(err);
		else res.json('notification sent through an email');
	});
};

module.exports = { sendEmail, sendNotificationEmail };
