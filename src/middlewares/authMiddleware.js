// middlewares/authMiddleware.js
function authMiddleware(req, res, next) {
  // find user from token
  next();
}

module.exports = { authMiddleware };