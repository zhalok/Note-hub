const express = require('express');
const multer = require('multer');
const {
	saveContentImage,
	saveUserImage,
} = require('../Controllers/file_route_controller');
const router = express.Router();

const upload = multer();

router.post(
	'/saveContentImage',
	upload.single('content-image'),
	saveContentImage
);

router.post('/saveUserImage', upload.single('user-image'), saveUserImage);

module.exports = router;
