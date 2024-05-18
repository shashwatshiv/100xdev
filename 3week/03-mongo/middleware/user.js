const { default: mongoose } = require("mongoose");
const { User } = require("../db");
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  var userName = req.headers.username;
  var passWord = req.headers.password;
  let auth = await User.findOne({ username: userName, password: passWord });
  if (auth == null) {
    res.json({ messege: "User does not exist" });
  } else {
    next();
  }
}

module.exports = userMiddleware;
