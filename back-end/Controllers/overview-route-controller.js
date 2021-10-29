const overview_model = require('../models/overview-model');
const getOverview = (req, res) => {
	const type = req.body.type;
	overview_model.find({}, (err, data) => {
		// if (err) next(err);
		res.json(data);
	});
	// res.json('ok');
};

module.exports = { getOverview };
