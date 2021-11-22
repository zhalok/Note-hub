const express = require('express');
const router = express.Router();
const answerRouterController = require('../Controllers/answer-route-controller');

router.get('/:discussion_id', answerRouterController.get_answer);
router.post('/', answerRouterController.add_answer);
router.delete('/:answer_id', answerRouterController.delete_answer);

module.exports = router;
