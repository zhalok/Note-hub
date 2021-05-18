const express = require("express");

const notes_route_controller = require("../Controllers/note-route-controller");

const router = express.Router();

router.get("/get_all", notes_route_controller.get_all_notes);
router.get("/semester/:sem", notes_route_controller.get_notes_by_semester);
router.get("/get_by_name/:name", notes_route_controller.get_notes_by_name);

module.exports = router;
