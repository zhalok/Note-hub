const express = require('express');
const path = require('path');
const multer = require('multer');
const app = express();
const router = express.Router();
const imageFIleModel = require('../models/image_file_model');

const saveContentImage = (req, res, next) => {
	const storage = multer.diskStorage({
		destination: './public/',
		filename: function (req, file, cb) {
			cb(null, 'IMAGE-' + Date.now() + path.extname(file.originalname));
		},
	});

	const upload = multer({
		storage: storage,
		limits: { fileSize: 100000000000 },
	}).single('myfile');

	upload(req, res, (err) => {
		if (err) next(err);
		console.log('Request ---', req.body);
		console.log('Request file ---', req.file); //Here you get file.
		const file = new imageFIleModel();
		file.meta_data = req.body;
		// file.save().then(() => {
		// 	res.json({ message: 'uploaded successfully' });
		// });
		/*Now do where ever you want to do*/
	});

	// res.json('ok on the file route controler route');
};

const saveUserImage = (req, res, next) => {
	res.json('ok on the route');
};

module.exports = { saveContentImage, saveUserImage };
