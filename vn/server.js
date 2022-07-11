const knex = require("./config/database")
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use(express.static())
// index page
app.get('/', (req, res) => {
    res.render('index');
    //   res.send("index{uygfghjk}")
});

// about page
app.get('/about', (req, res) => {
    res.render('about');
});

app.get("/regstration",(req,res)=>{
    const arr = [2,3,5,7,8,6,4,2,56,7,98,8,6,5]
   res.render("regstration",{arr:arr})
})

app.listen(8080);
console.log('Server is listening on port 8080');