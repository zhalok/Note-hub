const express = require('express');

const projects_route_controller = require('../Controllers/project-route-controller');

const router = express.Router();

router.get('/get_all', projects_route_controller.get_all_projects);
router.get(
	'/semester/:sem',
	projects_route_controller.get_projects_by_semester
);
router.get(
	'/get_by_name/:name',
	projects_route_controller.get_projects_by_name
);

router.get(
	'/get_by_contributor_id/:contributor_id',
	projects_route_controller.get_projects_by_contributorID
);

module.exports = router;
