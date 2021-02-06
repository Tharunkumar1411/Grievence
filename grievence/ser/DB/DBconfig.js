var mongoose = require("mongoose");
var dotenv = require("dotenv")
dotenv.config();


mongoose.connect(process.env.API_URL,{useNewUrlParser:true, useUnifiedTopology:true});
exports.config = mongoose.connect(process.env.API_URL,function(){
    console.log('database connected');
})