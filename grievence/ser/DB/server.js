const PORT = process.env.PORT || 3000;
var express = require('express');
var server = express()
server.listen(PORT, ()=>{
    console.log(PORT);
    console.log("server started");
});

module.exports = server
