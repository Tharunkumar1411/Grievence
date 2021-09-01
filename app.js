const express = require('express');
var bodyParser = require('body-parser');
var app = express();
const passport = require("passport");

const cors = require("cors")
var mongoose = require("mongoose");
var dotenv = require("dotenv")
dotenv.config();

const passportSetup = require('./module/passport-setup')
var router = require('./router/routers');


//server setup
const PORT = process.env.PORT || 3000;

app.use(cors());
app.listen(PORT, () => {
    console.log("port started" + PORT)
})


mongoose.connect(process.env.API_URL, { useNewUrlParser: true, useUnifiedTopology: true });
exports.config = mongoose.connect(process.env.API_URL, function() {
    console.log('database connected');
})

app.get("/google", passport.authenticate("google", {
    scope: ['profile']
}));

app.get("/google/redirect", passport.authenticate('google'), (req, res) => {
    res.send("you reached the callback url");
})

app.use(cors({ credentials: true, origin: "*" }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router)
    // app.use("/auth",authRoute)