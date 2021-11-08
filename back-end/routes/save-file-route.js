const express = require('express');
const {
	saveContentImage,
	saveUserImage,
} = require('../Controllers/file_route_controller');
const router = express.Router();

router.post('/saveContentImage', saveContentImage);
router.post('/saveUserImage', saveUserImage);

module.exports = router;
