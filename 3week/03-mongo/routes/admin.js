const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { default: mongoose } = require("mongoose");
const { Admin, Course } = require("../db");
const router = Router();
// Admin Routes
router.post("/signup", async (req, res) => {
  const exists = await Admin.findOne({ username: req.body.username });
  if (exists == null) {
    Admin.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.json({ message: "Admin created successfully" });
  } else res.json({ message: "Admin already exists" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  let newCourse = await Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
  });
  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  let courses = await Course.find();
  res.json({ courses: courses });
});

module.exports = router;
