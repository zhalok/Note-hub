const express = require("express");
const user_controller = require("../Controllers/user-route-controller");
const router = express.Router();

router.post("/", user_controller.check_user_validity);

module.exports = router;
