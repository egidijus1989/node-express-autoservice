const express = require('express')
const router = express.Router();

const autoServiceController = require("../controllers/autoServiceController")
const authController = require("../controllers/authController")

router.use(authController.protect)

router.route("/")
.get(autoServiceController.getAllAutoServices)
.post(authController.restrictTo("admin"), autoServiceController.createAutoService)

router.route("/:id")
.patch(authController.restrictTo("admin"), autoServiceController.updatAutoService)
.delete(authController.restrictTo('admin'), autoServiceController.deleteAutoService)

module.exports = router