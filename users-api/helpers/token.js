const jwt = require('jsonwebtoken');
const env = require('../config/env');
const ms = require('ms');

const getToken = function(req) {
  if (req && req.cookies)
    return req.cookies['token'];

  return;
};

const sendToken = function(res, token) {
  const expiresMs = new Date().getTime() + ms(env.token_expiration);
  res.cookie('token', token, { maxAge: ms(env.token_expiration) });
  res.cookie('expirems', expiresMs, { maxAge: ms(env.token_expiration) });
}

const generateToken = (payload) => {
  return jwt.sign(payload, env.secret, { expiresIn: env.token_expiration });
};

const verifyToken = (token) => {
  return jwt.verify(token, env.secret)
};

module.exports = {
  getToken,
  sendToken,
  generateToken,
  verifyToken
}