const { default: mongoose } = require("mongoose");
const { Admin } = require("../db");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  let userName = req.headers.username;
  let password = req.headers.password;
  console.log(userName);
  Admin.findOne({ username: userName, password: password }).then((data) => {
    if (data == null) {
      res.json({ error: "user does not exist" });
    } else {
      next();
    }
  });
}

module.exports = adminMiddleware;
