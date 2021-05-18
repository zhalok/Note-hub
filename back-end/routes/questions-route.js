const express = require("express");

const question_route_controller = require("../Controllers/question-route-controller");

const router = express.Router();

router.get("/get_all", question_route_controller.get_all_questions);
router.get(
  "/semester/:sem",
  question_route_controller.get_questions_by_semester
);
router.get(
  "/get_by_name/:name",
  question_route_controller.get_questions_by_name
);

module.exports = router;
