const express = require('express');
const overviewRoute = express.Router();
const overviewRouteController = require('../Controllers/overview-route-controller');

overviewRoute.get('/', overviewRouteController.getOverview);

module.exports = overviewRoute;
