const express = require('express');
const path = require('path');
const multer = require('multer');
const app = express();
const router = express.Router();
const imageFIleModel = require('../models/image_file_model');

const saveContentImage = (req, res, next) => {
	console.log(req.file);
	res.json('ok');
};

const saveUserImage = (req, res, next) => {
	console.log(req.file);
	res.json('ok');
};

module.exports = { saveContentImage, saveUserImage };
