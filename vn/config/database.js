const knex = require("knex")({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        database:"blog_page",
        password:"Praveen@123"
    }
})

knex.schema.createTable("signatur",table=>{
    table.increments("id")
    table.string("name")
    table.string("email")
    table.string("password")
})

module.exports = knex