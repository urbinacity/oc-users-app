const sequelize = require('../sequelize');
const { Model, DataTypes } = require('sequelize');
const { hashPassword }  = require('../helpers/crypto');

class User extends Model {
  toJSON() {
    return Object.assign({}, this.get(), { password: undefined });
  };
};

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlphanumeric: true
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      return this.setDataValue('password', hashPassword(value));
    },
  },
}, {
  defaultScope: {
    attributes: {
      exclude: ['password'],
    },
  },
  sequelize,
});

(async () => {
  await User.sync();
})();

module.exports = User;