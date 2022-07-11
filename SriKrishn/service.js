const express = require("express")
const app = express()
const knex = require("./config/databas")
const cloudinary = require("./madules/cloudnary")
const { createToken, tokenVrify } = require("./madules/jsomnMiddel")
const uplode = require("./madules/multer")
const { validate } = require("./madules/validater")
const bcrypt = require("bcrypt")
const ejs = require("ejs")
const path = require("path")

app.use(express.json())

// set the views engine
const cssPath = path.join(__dirname,"./templates/public")
const viewsPath = path.join(__dirname,"./templates/views")
app.set("view engine","ejs")
app.set("views",viewsPath)
app.use(express.static(cssPath))
app.use(express.urlencoded({extends:true}))


app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/register",(req,res)=>{
    res.render("register")
})

app.post("/register",validate, async (req,res)=>{
    const {email} = req.body
    let data = await knex("users").where({email})
    if(data.length == 0){
        const {name,email} = req.body
        await knex("users").insert(req.body)
        return res.status(200).render("login")
    }
    res.status(404).send("try again")
})



app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/login",async (req,res)=>{
    let data1 = await knex("users").where({email:req.body.email})
    if (data1.length ==1){
        let token = createToken(data1[0])
        res.cookie("cookie",token)
        return res.redirect("/showBlogs")
    }
    res.redirect("/login")
})


app.get("/blogPost",(req,res)=>{
    res.render("form");
})

app.post("/blogPost",tokenVrify,uplode.single("image"),async (req,res)=>{
    const {Title,peraOne,peraTwo} = req.body
    let image =await cloudinary.uploader.upload(req.file.path)
    const {secure_url} = image
    const BlogerId = req.userData[0].id
    await knex('Blogs').insert({BlogerId,Title,peraOne,peraTwo,secure_url})
    res.redirect("/showBlogs")
})
// 
// app.post("/blogPost",tokenVrify,uplode.single("image"),(req,res)=>{
    // res.send("inerted")
// })


app.get("/showBlogs",async(req,res)=>{
    let array = []
    let data = await knex("Blogs")
    // console.log(data);
    data.map((item)=>{
        array.push({Title:item.Title,peraOne:item.peraOne,peraTwo:item.peraTwo,Image:item.secure_url,Date:item.created_at})
    })
    // console.log(array);
    res.render("index",{arr:array})
})

app.listen(5050,()=>{
    console.log("connected");
})