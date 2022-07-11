const knex =require("knex")({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        password:"Praveen@123",
        database:"ganeshdb"
    }
})

knex.schema.createTable("user",table=>{
    table.increments("id")
    table.string("name")
    table.string("email")
    table.string("password")
}).then((result) => {
   console.log("create table"); 
}).catch((err) => {
    console.log(err);
});

module.exports = knex