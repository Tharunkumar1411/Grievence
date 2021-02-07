const express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors")
var app = express();
app.use(cors({credentials:true,origin:'*'}))

var config = require('./ser/DB/DBconfig')
var server = require('./ser/DB/server')
var router = require('./router/routers');
var authRoute = require('./router/authRouter')






app.use(bodyParser.json())
app.use(bodyParser.urlencoded ({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",router)
// app.use("/auth",authRoute)
