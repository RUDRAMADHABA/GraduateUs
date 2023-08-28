const express = require("express");
const {
  registerUser,
  authUser,
  forgetPassword,
  resetPassword,
  profileData,
  updateProfile,
  searchJobs,
  authGoogleUser,
  searchJob,
} = require("../controllers/userControllers");
const {
  addSubjects,
  markAttendance,
  getSubjectWiseAttendance,
  getAllSubjects,
} = require("../controllers/attendanceControllers");
const router = express.Router();

const path = require("path");
const userController = require("../controllers/userControllers");
const GoogleRoutes = require("../middleware/GoogleSignup");
const { protect } = require("../middleware/authMiddleware");

const { cgpaCal } = require("../controllers/cgpa");

router.route("/register").post(registerUser);
router.post("/login", authUser);
router.post("/Googlelogin", authGoogleUser);
router.route("/forget-password").post(forgetPassword);
router.route("/reset-password").post(resetPassword);
router.route("/edit").get(protect, profileData);
router.route("/edit").put(protect, updateProfile);
router.get("/searchJobs", searchJobs);
router.get("/searchJob", searchJob);

router
  .route("/subjects")
  .post(protect, addSubjects)
  .get(protect, getAllSubjects);
router
  .route("/attendance")
  .post(protect, markAttendance)
  .get(protect, getSubjectWiseAttendance);

//For Google Sign up
router.use("/GoogleSignup", GoogleRoutes);

//Successfull sign up
router.get("/protected", (req, res) => {
  res.send("Succesfully logged in");
});

//for CGPA
router.post("/cgpa", cgpaCal);

module.exports = router;
