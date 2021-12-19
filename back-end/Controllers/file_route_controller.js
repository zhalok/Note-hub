// const express = require('express');
// const path = require('path');
// const multer = require('multer');
// const app = express();
// const router = express.Router();
// const upload_folder_path = require('../../front-end/src/images/uploads/');

// const saveContentImage = (req, res, next) => {
// 	const location_map = {
// 		books: upload_folder_path + 'books',
// 		notes: upload_folder_path + 'notes',
// 		questions: upload_folder_path + '',
// 	};
// 	const ContetnImageUpload = multer({
// 		limits: 500000000,
// 		storage: multer.diskStorage({
// 			destination: (req, file, cb) => {},
// 			filename: (req, file, cb) => {},
// 		}),
// 	});
// };

// const saveUserImage = (req, res, next) => {};

// module.exports = { saveContentImage, saveUserImage };
