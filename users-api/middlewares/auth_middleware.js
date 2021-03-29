const { getToken, verifyToken } = require('../helpers/token');

const isAuthenticated = async (req, res, next) => {
  const token = getToken(req);

  try {
    const payload = verifyToken(token);
    req.user = payload;
  } catch (error) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  next();
};

module.exports = {
  isAuthenticated
}