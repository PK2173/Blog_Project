const joi = require("joi")

const validate = ((req, res, next) => {
    const schemaValidate = joi.object({
        name: joi.string().required(),
        email: joi.string().required().email(),
        password: joi.required()
    })
    let data = schemaValidate.validate(req.body)
    if (data.error) {
        res.send("data not valid please try again")
    } else {
        next()
    }
})


module.exports = { validate}