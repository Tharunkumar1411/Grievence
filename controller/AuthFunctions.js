var { User } = require('../ser/DB/Schema')
var jwt = require("jsonwebtoken");
var mongoose = require('mongoose');
const { json } = require("body-parser");
var bcrypt = require('bcryptjs');
const cors = require('cors')
var dotenv = require("dotenv")
dotenv.config();

exports.jwt = (async(req, res) => {

    var token = req.body.jwt;
    console.log(token);

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });


        const foundUser = User.findOne({ "email": decoded.email }).then((result) => {
            // console.log(result);
            res.send(result.email)
        })

    })

});


//generate token and create new user db
exports.signIn = (async(req, res) => {

    // var hashing = await bcrypt.hashSync(req.body.password, 8);
    const foundUser = User.findOne({ "email": req.body.email }).then((done) => {
        if (done !== null) {

            let token = jwt.sign({ email: req.body.email }, process.env.TOKEN_SECRET, { expiresIn: '8760hr' });

                console.log(req.body.password);
                User.findOne({"password": req.body.password}).then((data) => {

                    if(data !== null){
                        console.log("found");
                        res.status(200).send({auth: true, token: token});
                    }else{
                        console.log("not found");
                        res.status(404).send({auth: false});
                    }
                })
        } else {
            User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    logedIn: new Date().toLocaleDateString(),
                },

                function(err, user) {
                    if (err) return res.status(500).send("issues to registering a user");

                    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '8760hr' });

                    res.status(200).send({ auth: true, token: token });
                })
        }
    })



});