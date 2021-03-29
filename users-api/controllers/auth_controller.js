const User = require('../models/user_model');
const { comparePassword }  = require('../helpers/crypto');
const { generateToken, sendToken }  = require('../helpers/token');

const signup = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch ({ errors }) {
    res.status(400).send({
      message: 'Error creating user',
      errors: errors.map(error => error.message)
    });
  }
};

const login = async (req, res, next) => {
  const { username, password } = req.body;

  if(!username || !password) {
    return res.status(400).send({ message: 'Both username and password are required.' });
  }

  const user = await User.scope().findOne({ where: { username } });

  if(user === null) {
    return res.status(404).send({ message: 'User was not found' });
  } else if(!comparePassword(password, user.password)){
    return res.status(401).send({ message: 'User password doesn\'t match' });
  } else {
    const payload = user.toJSON();
    const token = generateToken(payload);

    sendToken(res, token);
    return res.status(200).json(payload);
  }
};

module.exports = {
  signup,
  login,
}