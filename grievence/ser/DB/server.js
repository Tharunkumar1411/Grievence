const PORT = process.env.PORT || 3000;
var express = require('express');
var app = express()
app.listen(PORT, ()=>{
    console.log(PORT);
    console.log("server started");
});

module.exports = app
