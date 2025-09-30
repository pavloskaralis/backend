function bookingScope(req, res, next) {
  const where = {};
  if (req.user.customerId) {
    where.customerId = req.user.customerId;
  } else if (req.user.doctorId) {
    where.doctorId = req.user.doctorId;
  } else {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  req.bookingScope = where;
  next();
}

module.exports = { bookingScope };