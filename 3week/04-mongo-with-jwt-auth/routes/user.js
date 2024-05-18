const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course, JWT_KEY } = require("../db");
var jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  let username = req.body.username;
  let password = req.body.password;
  const exists = await User.findOne({ username: username });
  if (exists == null) {
    console.log(exists);
    User.create({ username: username, password: password }).then(() => {
      res.json({ messesge: "User created successfully" });
    });
  } else {
    res.json({ messesge: "User already exists" });
    console.log(exists);
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const exists = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (exists == null) {
    res.json({ messesge: "user doesn't exist, signup first" });
  } else {
    let token = await jwt.sign({ username: req.body.username }, JWT_KEY);
    res.json({ token: token });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  let allCourses = await Course.find();
  res.json({ courses: allCourses });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  console.log("hello");
  let courseID = req.params.courseId;
  let username = req.headers.username;
  console.log(username);
  User.updateOne(
    { username: username },
    {
      $push: { coursesPurchased: courseID },
    }
  ).then(() => {
    res.json({ messesge: "course purchase successfully" });
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  let username = req.headers.username;
  let user = await User.findOne({ username });
  let courses = await Course.find({
    _id: {
      $in: user.coursesPurchased,
    },
  });
  console.log(courses);
  res.json({ dingding: courses });
});

module.exports = router;
