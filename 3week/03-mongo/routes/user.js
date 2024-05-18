const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const mongoose = require("mongoose");
const { User, Course } = require("../db");
// User Routes
router.post("/signup", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  User.create({ username: username, password: password });
  res.json({ message: "User created successfully" });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  let courses = await Course.find();

  res.json({ courses: courses });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  let courseID = req.params.courseId;
  let username = req.headers.username;

  User.updateOne(
    { username: username },
    { $push: { coursesPurchased: courseID } }
  ).then(() => {
    res.json({ message: "purchase successful" });
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses
  const username = req.headers.username;
  const user = await User.findOne({ username });

  let courses = await Course.find({
    _id: {
      $in: user.coursesPurchased,
    },
  });
  res.json({ courses: courses });
});

module.exports = router;
