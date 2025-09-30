// policies/ratingPolicy.js

function canModifyRating(req, rating) {
  if (!req.user.customerId) return false;
  return rating.customerId === req.user.customerId;
}

module.exports = { canModifyRating };
