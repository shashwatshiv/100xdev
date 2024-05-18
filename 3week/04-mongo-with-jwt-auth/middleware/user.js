const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../db");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  let token = req.headers.authorization;

  token = token.split(" ")[1];
  try {
    let jwtToken = jwt.verify(token, JWT_KEY);
    if (jwtToken.username) {
      req.headers.username = jwtToken.username;
      next();
    }
  } catch (error) {
    res.status(403).json({ messege: "you are not authenticated" });
  }
}

module.exports = userMiddleware;
