// Update with your config settings.
require('dotenv/config')

module.exports = {
  development: {
    client: "postgresql",
    connection: process.env.DB_DV_CONNECTION,
    migrations: {
      directory: "./src/database/migrations",
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/test.sqlite",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  production: {
    client: "postgresql",
    connection: process.env.DB_PR_CONNECTION,
    migrations: {
      directory: "./src/database/migrations",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },
};
