// hi welcome to book-route.js
// here we are at the book route

const express = require('express');

const book_route_controller = require('../Controllers/book-route-controller');

const router = express.Router();
// here we are creating the express router sub application

router.get('/get_all', book_route_controller.get_all_books);
// on the hit of different end points we are calling different functions
// we name the code functions of node js application as controllers
// I hope we are done with the routes all the routes basically do the same sort of stuff
// there is no need to go through all the routes
// lets go explain a controller function
router.get('/semester/:sem', book_route_controller.get_books_by_semester);
router.get('/get_by_name/:name', book_route_controller.get_books_by_name);
router.get(
	'/get_book_by_contributor_id/:contributor_id',
	book_route_controller.get_book_by_contributorID
);
router.delete('/:id', book_route_controller.delete_book);
module.exports = router;
