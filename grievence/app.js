const express = require('express');
var bodyParser = require('body-parser');
var app = express();


var config = require('./ser/DB/DBconfig')
var app = require('./ser/DB/server')
var router = require('./router/routers');
var authRoute = require('./router/authRouter')

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    next()
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded ({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",router)
app.use("/auth",authRoute)