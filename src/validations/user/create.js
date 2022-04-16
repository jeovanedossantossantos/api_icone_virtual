const {validate, Joi} = require('express-validation')

module.exports = validate({
    body: Joi.object({
        nome:Joi.string().required(),
        email:Joi.string().required(),
        senha:Joi.string().required(),
        endereco:Joi.string().required(),
        type:Joi.string().required()


    })
})