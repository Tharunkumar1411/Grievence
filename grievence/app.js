const express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require("cors")
var mongoose = require("mongoose");
var dotenv = require("dotenv")
dotenv.config();

const passportSetup = require('./module/passport-setup')
// var config = require('./ser/DB/DBconfig')
// var server = require('./ser/DB/server')
var router = require('./router/routers');
var authRoute = require('./router/authRouter')


//server setup
const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log("port started"+PORT)
})


mongoose.connect(process.env.API_URL,{useNewUrlParser:true, useUnifiedTopology:true});
exports.config = mongoose.connect(process.env.API_URL,function(){
    console.log('database connected');
})


app.use(cors({credentials:true,origin:'*'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded ({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",router)
// app.use("/auth",authRoute)
