require("./GoogleAuth");
const express = require("express");
const router = express.Router();
require("dotenv").config();
const passport = require("passport");
const User = require("../models/userModel");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGO_URI,
  () => {},
  (e) => console.error(e)
);

function isLogged(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.get("/", (req, res) => {
  res.send("auth working fine");
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/home",
    failureRedirect: "/auth/failure",
  })
);

//basic endpoints

// router.get('/failure', (req, res) => {
//     res.send("INVALID LOGIN")
// })

// router.get('/user/protected', isLogged, (req, res) => {
//     res.send("Succesfully logged in");

// })

router.get("/logout", function (req, res, next) {
  req.logOut(function (err) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    console.log("user has been loged out");
    res.redirect("http://localhost:3000/");
  });
});

module.exports = router;
