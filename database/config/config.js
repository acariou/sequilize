require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    username: "arno",
    password: null,
    // host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    username: "arno",
    password: null,
    // database: "database_test",
    // host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    url: process.env.DATABASE_URL,
    // username: "root",
    // password: null,
    // database: "database_production",
    // host: "127.0.0.1",
    dialect: "postgres"
  }
}
