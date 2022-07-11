const express = require("express")
const hbs = require("hbs")
const path = require("path")
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))
const partils_path = path.join(__dirname,"./templates/partials")
const template_path = path.join(__dirname,"./templates/views")
const static_path = path.join(__dirname,"/public")

app.set("view engine","hbs")
app.use(express.static(static_path))
app.set("views",template_path)
hbs.registerPartials(partils_path)

app.get("/home",(req,res)=>{
    res.render("index.hbs")
})

app.listen(7070,()=>{
    console.log("http://localhost:7070");
})