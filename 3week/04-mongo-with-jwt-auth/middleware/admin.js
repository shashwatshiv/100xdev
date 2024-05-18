// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../db");
async function adminMiddleware(req, res, next) {
  let token = req.headers.authorization;
  token = token.split(" ")[1];
  try {
    let jwtToken = await jwt.verify(token, JWT_KEY);
    console.log(jwtToken);
    if (jwtToken.username) {
      next();
    }
  } catch (error) {
    res.status(403).json({ messege: "you are not authenticated" });
  }
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
