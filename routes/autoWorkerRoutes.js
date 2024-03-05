const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController")
const autoWorkerController = require("../controllers/autoWorkerController")

router.use(authController.protect)

router.route("/")
.get(autoWorkerController.getAllAutoWorkers)
.post(authController.restrictTo("admin"), autoWorkerController.createAutoWorker)

router.route("/:id")
.patch(authController.restrictTo("admin"), autoWorkerController.updatAutoWorker)
.delete(authController.restrictTo('admin'), autoWorkerController.deleteAutoWorker)

router.route("/:id/like")
.patch(autoWorkerController.updatAutoWorkerLike)

module.exports = router