const saveContentImage = (req, res, next) => {
	res.json('ok on the file route controler route');
};

const saveUserImage = (req, res, next) => {
	res.json('ok on the route');
};

module.exports = { saveContentImage, saveUserImage };
