const express = require('express');
const router = express.Router();
const admin_route_controller = require('../Controllers/admin-route-controller');

router.post('/login', admin_route_controller.check_admin_validty);
router.post('/create', admin_route_controller.create_new_admin);
router.post('/verify/', admin_route_controller.verify_user);

module.exports = router;
