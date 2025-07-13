function checkRole(requiredRole) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== requiredRole) {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    next(); // user is admin, continue
  };
}

module.exports = checkRole;
