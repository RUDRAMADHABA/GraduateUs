var admin = require("firebase-admin");
var fcm = require("fcm-notification");

var serviceAccount = require("../config/pushNotificationKey.json");
const certPath = admin.credential.cert(serviceAccount);
var FCM = new fcm(certPath);

exports.sendPushNotification = (req, res, next) => {
  try {
    let message = {
      notification: {
        title: "Test Notification",
        body: "Notification Message",
      },
      data: {
        orderId: "123456",
        orderDate: "2023-07-15",
      },
      token: req.body.fcm_token,
    };
    FCM.send(message, function (err, resp) {
      if (err) {
        return resp.status(500).send({
          message: err,
        });
      } else {
        return resp.status(200).send({
          message: "Notification Sent",
        });
      }
    });
  } catch (error) {
    throw err;
  }
};
