const express = require("express");
const user_router = express.Router();
const user_route_controller = require("../Controllers/user-route-controller");

user_router.get("/get_all", user_route_controller.get_all_users);
user_router.get("/id/:uid", user_route_controller.get_user_by_id);
user_router.get("/name/:name", user_route_controller.get_users_by_name);
user_router.post("/signup", user_route_controller.add_new_user);
user_router.get("/login", user_route_controller.check_user_validity);
user_router.post("/add", user_route_controller.add_new_user);

module.exports = user_router;
