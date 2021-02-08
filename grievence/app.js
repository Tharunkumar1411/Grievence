const express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require("cors")


const passportSetup = require('./module/passport-setup')
var config = require('./ser/DB/DBconfig')
// var server = require('./ser/DB/server')
var router = require('./router/routers');
var authRoute = require('./router/authRouter')


//server setup
const PORT = process.env.PORT || 3000;
var dotenv = require('dotenv')
dotenv.config()

app.listen(PORT,()=>{
    console.log("port started"+PORT)
})


host.Plugins.Add(new CorsFeature(
    allowedOrigins, "*",
    allowedMethods, "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders, "*",
    allowCredentials, false));

app.use(cors({credentials:true,origin:'*'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded ({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",router)
// app.use("/auth",authRoute)
