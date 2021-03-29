const { Sequelize } = require('sequelize');
const env = require('./config/env');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: env.database_file,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;