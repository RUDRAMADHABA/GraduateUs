const express = require("express");
const { registerUser, authUser, forgetPassword, resetPassword, profileData, updateProfile } = require("../controllers/userControllers");
const router = express.Router();

const path = require('path');
const userController = require('../controllers/userControllers')
const GoogleRoutes = require('../middleware/GoogleSignup')
const { protect } = require("../middleware/authMiddleware");

const { cgpaCal } = require( "../controllers/cgpa");

router.route("/register").post(registerUser);
router.post("/login", authUser);
router.route('/forget-password').post(forgetPassword)
router.route('/reset-password').get(resetPassword)
router.route('/edit').get(protect, profileData)
router.route('/edit').put(protect, updateProfile)
router.get("/jobs", userController.jobs)

//For Google Sign up
router.use("/GoogleSignup", GoogleRoutes)

//Successfull sign up
router.get('/protected', (req, res) => {
    res.send("Succesfully logged in");

})

//for CGPA
router.post('/cgpa', cgpaCal);
 


module.exports = router;
