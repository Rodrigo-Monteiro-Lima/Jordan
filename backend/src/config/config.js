const dotenv = require('dotenv');

dotenv.config();

const config = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'jordan',
  host: process.env.XABLAU_HOST || 'localhost',
  port: process.env.DB_PORT || '3306',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};