const express = require("express");

const book_route_controller = require("../Controllers/book-route-controller");

const router = express.Router();

router.get("/get_all", book_route_controller.get_all_books);
router.get("/semester/:sem", book_route_controller.get_books_by_semester);
router.get("/get_by_name/:name", book_route_controller.get_books_by_name);

module.exports = router;
