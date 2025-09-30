// policies/licensePolicy.js
function licenseScope(req, res, next) {
  if (!req.user.doctorId) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  req.licenseScope = { doctorId: req.user.doctorId };
  next();
}

module.exports = { licenseScope };