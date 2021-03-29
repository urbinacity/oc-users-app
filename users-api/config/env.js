const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  database_file: process.env.DATABASE_FILE || 'default-database.sqlite',
  secret: process.env.TOKEN_SECRET,
  token_expiration: process.env.TOKEN_EXPIRATION,
};