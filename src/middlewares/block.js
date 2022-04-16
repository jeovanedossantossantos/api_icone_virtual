const secret = require('../config/secret')
const expressJWT = require('express-jwt')

module.exports = expressJWT({
    secret: secret.key,
    algorithms:['HS256']
})