const express = require("express");
const user_controller = require("../Controllers/user-route-controller");
const router = express.Router();

router.post("/", user_controller.add_new_user);

module.exports = router;
