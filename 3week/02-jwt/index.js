const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const { z } = require("zod");

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
const User = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

function signJwt(username, password) {
  let allow = User.safeParse({ username, password });
  let token = "";
  if (allow.success) {
    token = jwt.sign({ username }, jwtPassword);
    return token;
  } else {
    return null;
  }
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
  try {
    const decoded = jwt.verify(token, jwtPassword);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
  try {
    let decodedToken = jwt.decode(token);
    if (decodedToken == null) {
      return false;
    } else return true;
  } catch (error) {
    return false;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
