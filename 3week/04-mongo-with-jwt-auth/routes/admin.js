const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const mongoose = require("mongoose");
const { Admin, Course, JWT_KEY } = require("../db");
var jwt = require("jsonwebtoken");
// Admin Routes
router.post("/signup", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const exists = await Admin.findOne({ username: username });
  if (exists == null) {
    console.log(exists);
    Admin.create({ username: username, password: password }).then(() => {
      res.json({ messesge: "admin created successfully" });
    });
  } else {
    res.json({ messesge: "admin already exists" });
    console.log(exists);
  }
});

router.post("/signin", async (req, res) => {
  const exists = await Admin.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (exists == null) {
    res.json({ messesge: "admin doesn't exist, signup first" });
  } else {
    let token = await jwt.sign({ username: req.body.username }, JWT_KEY);
    res.json({ token: token });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  res.send("hello");
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
