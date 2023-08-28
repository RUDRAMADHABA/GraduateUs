const express = require("express");
const {
  sendPushNotification,
} = require("../controllers/pushNotificationControllers");

const router = express.Router();

router.route("/").post(sendPushNotification);

module.exports = router;
