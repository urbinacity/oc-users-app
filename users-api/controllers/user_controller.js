const User = require('../models/user_model');

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await User.destroy({ where: { id }});
    res.status(201).send({ message: `${result} user(s) deleted.` });
  } catch (error) {
    res.status(400).send({ message: 'Error deleting new user' });
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params
  const user = await User.findByPk(id);

  if(user === null) {
    res.status(404).send({ message: 'User was not found' });
  } else {
    res.status(200).send(user);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ message: 'Error obtaining list of users' });
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    await user.update(req.body);

    res.status(201).send(user);
  } catch ({ errors }) {
    res.status(400).send({
      message: 'Error updating user',
      errors: errors.map(error => error.message)
    });
  }
};

module.exports = {
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
};
