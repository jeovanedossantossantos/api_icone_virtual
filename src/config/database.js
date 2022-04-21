require('dotenv/config')

const { database, password, host, port, db_username } = require("./env");
console.log(database, password, host, port, db_username)
module.exports = {
  dialect: 'mysql',
  host,
  database,
  username:db_username,
  password,
  port: 3306,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
