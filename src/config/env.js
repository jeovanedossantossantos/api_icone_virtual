require('dotenv/config')

module.exports = {
    host: process.env.HOST || process.env.CLEARDB_DATABASE_URL || CLEARDB_DATABASE_URL,
    db_username: process.env.DBUSER || 'root',
    password: process.env.PASS || 'A1b3.4J8',
    database: process.env.DATABASE || 'db_icone_virtual_docker',
    port: 3306,

}