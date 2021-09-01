var { User, Hostel, Academic, Ragging, Transport, Other } = require('../ser/DB/Schema')
var jwt = require("jsonwebtoken");
var mongoose = require('mongoose');
const { json } = require("body-parser");
var bcrypt = require('bcryptjs');
const cors = require('cors')
var dotenv = require("dotenv")
dotenv.config();

exports.deleteAccount = (req, res) => {
    User.deleteOne({ "email": req.body.cook }).then((done) => {
        res.send(true)
    })
}

exports.getUserdetails = (req, res) => {
    User.findOne({ "email": req.body.Email }).then((done) => {
        res.send(done)
    })
}

exports.getTotalUserDetails = (req, res) => {
    User.find({}).then((done) => {
        res.status(200).send(done);
    })
}


exports.removeRespondedData = (req, res) => {
    var model = req.body.section;

    var condition = { email: req.body.mail },
        update = { $pull: { comp: req.body.complaint, suggetion: req.body.suggetion } },
        option = { multi: true };

    if (model === "Hostel") {
        Hostel.findOneAndUpdate(condition, update, option, callback);

        function callback(numAffected) {
            //   console.log(numAffected)
            res.send("successfully Hostel data Removed")
        }
    } else if (model === 'Academic') {
        Academic.findOneAndUpdate(condition, update, option, callback);

        function callback(numAffected) {
            //   console.log(numAffected)
            res.send("successfully Hostel data Removed")
        }
    } else if (model === 'Ragging') {
        Ragging.findOneAndUpdate(condition, update, option, callback);

        function callback(numAffected) {
            //   console.log(numAffected)
            res.send("successfully Hostel data Removed")
        }
    } else if (model === 'Transport') {
        Transport.findOneAndUpdate(condition, update, option, callback);

        function callback(numAffected) {
            //   console.log(numAffected)
            res.send("successfully Hostel data Removed")
        }
    } else if (model === 'Other') {
        Other.findOneAndUpdate(condition, update, option, callback);

        function callback(numAffected) {
            //   console.log(numAffected)
            res.send("successfully Hostel data Removed")
        }
    }

}