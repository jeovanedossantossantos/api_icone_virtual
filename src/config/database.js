require('dotenv/config')

const { database, password, host, port, db_username } = require("./env");
console.log(database, password, host, port, db_username)
module.exports = {
  dialect: 'mysql',
  host,
  database,
  username:db_username,
  password,
  port,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
