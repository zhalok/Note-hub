const express = require('express');
const router = express.Router();
const sendEmailRouteController = require('../Controllers/sendEmailRouteController');

router.post('/', sendEmailRouteController.sendEmail);
router.post(
	'/sendNotification',
	sendEmailRouteController.sendNotificationEmail
);

module.exports = router;
