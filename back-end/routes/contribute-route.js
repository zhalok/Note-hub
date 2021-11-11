const express = require('express');
const books_route_controller = require('../Controllers/book-route-controller');
const notes_route_controller = require('../Controllers/note-route-controller');
const projects_route_controller = require('../Controllers/project-route-controller');
const questions_route_controller = require('../Controllers/question-route-controller');

const router = express.Router();

router.post('/books', books_route_controller.add_new_book);
router.post('/notes', notes_route_controller.add_new_note);
router.post('/projects', projects_route_controller.add_new_project);
router.post('/questions', questions_route_controller.add_new_question);

module.exports = router;
