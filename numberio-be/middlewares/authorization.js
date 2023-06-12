const authorizeAdmin = (req, res, next) => {
  console.log('Hi');
  if (req.user.role === 'admin') {
    next();
  } else res.status(401).send();
};

const authorizeUser = (req, res, next) => {
  if (req.user.role === 'admin' || req.user.role === 'user') {
    next();
  } else res.status(401).send();
};

module.exports = {
  authorizeAdmin,
  authorizeUser,
};
