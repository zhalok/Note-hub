const express = require('express');
const router = express.Router();
const discussionRouteController = require('../Controllers/discussion-route-controller');

router.get('/get_all', discussionRouteController.getAllDiscussions);
router.get('/get_by_id/:id', discussionRouteController.getDiscussionById);
router.get(
	'/get_by_title/:titile',
	discussionRouteController.getDiscussionByTitle
);
router.post('/add', discussionRouteController.addDiscussion);
router.get('/delete/:id', discussionRouteController.deleteDiscussion);

module.exports = router;
