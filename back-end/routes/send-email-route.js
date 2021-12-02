const express = require('express');
const router = express.Router();
const sendEmailRouteController = require('../Controllers/send-email-route-controller');

router.post('/', sendEmailRouteController.sendEmail);
router.post(
	'/sendNotification',
	sendEmailRouteController.sendNotificationEmail
);

module.exports = router;
