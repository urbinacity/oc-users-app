const bcrypt = require('bcryptjs');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePassword
}