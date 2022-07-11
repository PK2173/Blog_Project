const jwt = require("jsonwebtoken")
const knex = require("../config/databas")

const createToken = ({ id }) => {
    return jwt.sign(id, "uytsdfijhjljuytrfrty65")
}

const tokenVrify = async (req, res, next) => {
    if (req.headers.cookie) {
        const token = (req.headers.cookie).split("=")[1]
        const id = jwt.verify(token, "uytsdfijhjljuytrfrty65")
        const user = await knex("users").where({ id })
        req.userData = user
        next()
    } else {
        res.redirect("/login")
    }
}

module.exports = { createToken, tokenVrify }