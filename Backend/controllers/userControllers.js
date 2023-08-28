const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");

const {
  auth,
  google,
  failure,
  protected,
  logout,
} = require("../middleware/GoogleSignup");
const Googlesignup = require("../middleware/GoogleSignup");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    console.log(name, email, password);
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create the User");
  }
});

const authGoogleUser = asyncHandler(async (req, res) => {
  const { name, email, pic } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      const user = await User.create({
        name,
        email,
        pic,
        password: "123",
      });
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    console.log(error);
    res.status(401);
    throw new Error(error.message);
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user);
  try {
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  } catch (error) {
    res.status(401);
    throw new Error(error.message);
  }
});

const forgetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    const token = generateToken(user._id);
    const data = await User.updateOne({ email }, { $set: { token: token } });
    sendResetPassword(user.name, user.email, token);
    res.status(200).send({
      success: true,
      message: `Please check your email! and the token is:${token}`,
    });
  } else {
    res.status(401);
    throw new Error("This email does not exist");
  }
});

const sendResetPassword = async (name, email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAILUSER,
      to: email,
      subject: "For Reset Password",
      html: `<p> Hi ${name}, Please copy the link and <a href="https://graduateus.com/reset-password/${token}
    "> reset your password </a></p>`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Mail has been sent:- ", info.response);
      }
    });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const token = req.query.token;
    const tokenData = await User.findOne({ token: token });
    if (tokenData) {
      const password = req.body.password;
      const newPassword = await securePassword(password);
      const userData = await User.findByIdAndUpdate(
        { _id: tokenData._id },
        { $set: { password: newPassword, token: "" } },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "User password Updated",
        data: userData,
      });
    } else {
      res
        .status(400)
        .send({ success: true, message: "This link has been expired" });
    }
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

const securePassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash;
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// const jobs = async (req, res) => {
//     //  res.send("ok")
//     console.log("good");

//     const params = {
//         google_domain: "google.co.in",
//         q: "React developer", //to be passed as props
//         hl: "en",
//         gl: "in",
//         location: "Maharashtra, India", //to be added as props
//         api_key: process.env.KEY,
//         Itype
//     };

//     // Show result as JSON
//     const response = await getJson("google_jobs", params);

//     const data = response.jobs_results

//     var result = [];

//     data.forEach(function (obj) {
//         const item = new Object();
//         item.profile = obj.title
//         item.location = obj.location
//         item.company = obj.company_name
//         item.salary = obj.salary

//         result.push(item);
//         console.log(item);
//     });

//     res.send(result);

// }

//this is for jobs search api
// const searchJobs = async (req, res) => {
//   const jobTitle = req.query.jobTitle;

// const options = {
//   method: "GET",
//   url: "https://jsearch.p.rapidapi.com/search",
//   params: {
//     query: jobTitle,
//     page: "1",
//     num_pages: "1",
//   },
//   headers: {
//     "X-RapidAPI-Key": "7415646ae7msh37f791037366780p1132e2jsna7ba58f2266b",
//     "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     //res.send(response.data);
//     //res.send(response.data.data[0].employer_name);
//     const arr = [];
//     var i = 0;

//     response.data.data.map((item) => {
//       const jobDetails = {
//         company: item.employer_name,
//         job_title: item.job_title,
//         apply_linnk: item.job_apply_link,
//         job_description: item.job_description,
//         job_is_remote: item.job_is_remote,
//         job_qulaification: item.job_highlights.Qualifications,
//       };

//       arr.push(jobDetails);
//       //console.log(item.employer_name)
//     });
//     res.send(arr);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
//};
const searchJobs = async (req, res) => {
  const { jobTitle, location } = req.query;
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: jobTitle,
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": "8c9a00577bmsh5c903aa726173d3p1a6db8jsna88c50f5aacd",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const searchJob = async (req, res) => {
  const { jobTitle } = req.query;
  const options = {
    method: "GET",
    url: "https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search",
    params: {
      SearchQuery: jobTitle,
    },
    headers: {
      "X-RapidAPI-Key": "8c9a00577bmsh5c903aa726173d3p1a6db8jsna88c50f5aacd",
      "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const profileData = async (req, res) => {
  try {
    const id = req.user._id;
    const userData = await User.findById({ _id: id });

    if (userData) {
      res.status(200).send({ success: true, userData: userData });
    } else {
      res.status(401);
      throw new Error("User not registered");
    }
  } catch (error) {
    console.log(error.message);
  }
};

const updateProfile = async (req, res) => {
  try {
    const {
      name,
      pic,
      email,
      phoneNo,
      address,
      linkedIn,
      currentPass,
      newPass,
    } = req.body;
    const updatedProfile = await User.findByIdAndUpdate(
      { _id: req.user._id },
      { $set: { name, pic, phoneNo, address, linkedIn } }
    );
    if (updatedProfile)
      res.status(200).send({ success: true, message: "Profile Updated" });
    else {
      throw new Error("Server Error");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  registerUser,
  authUser,
  authGoogleUser,
  forgetPassword,
  resetPassword,
  searchJobs,
  profileData,
  updateProfile,
  searchJobs,
  searchJob,
};
