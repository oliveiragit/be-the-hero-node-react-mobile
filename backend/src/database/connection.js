const knex = require("knex");
const configuration = require("../../knexfile");


const config = ((env = process.env.NODE_ENV || development) => {
  const cases= {
    development: configuration.development,
    test: configuration.test,
    production: configuration.production,
  }
  return cases[env]
})();

const connection = knex(config);

module.exports = connection;
