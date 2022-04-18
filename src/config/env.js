require('dotenv/config')

module.exports = {
    host: process.env.HOST || 'localhost',
    db_username: process.env.DBUSER || 'admin',
    password: process.env.PASS || '123456',
    database: process.env.DATABASE || 'db_icone_virtual',
    port: process.env.PORT || 3306,

}