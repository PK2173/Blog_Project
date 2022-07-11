const knex = require("knex")({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        password:"Praveen@123",
        database:"Bloging"
    }
})

knex.schema.createTable("users",(table)=>{
    table.increments("id")
    table.string("name")
    table.string("email")
    table.string("password")
}).then((result) => {
   console.log("create Users"); 
}).catch((err) => {
    // console.log(err);
});

knex.schema.createTable("Blogs",(table)=>{
    table.increments("id")
    table.integer("BlogerId").unsigned().nullable()
    table.string("Title")
    table.text("peraOne")
    table.text("peraTwo")
    table.string("secure_url")
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.foreign("BlogerId").references("users.id")
}).then((result) => {
   console.log("create Blogs"); 
}).catch((err) => {
    // console.log(err);
});

module.exports = knex