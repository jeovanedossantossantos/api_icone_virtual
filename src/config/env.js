require('dotenv/config')

module.exports = {
    host: process.env.HOST || process.env.CLEARDB_DATABASE_URL || CLEARDB_DATABASE_URL,
    db_username: process.env.DBUSER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    port: 3306,

}