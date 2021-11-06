const express = require('express');
const router = express.Router();
const sendEmailRouteController = require('../Controllers/sendEmailRouteController');

router.post('/', sendEmailRouteController.sendEmail);

module.exports = router;
