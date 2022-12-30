var { User, Hostel, Academic, Ragging, Transport, Other } = require('../ser/DB/Schema')
var jwt = require("jsonwebtoken");
var mongoose = require('mongoose');
const { json } = require("body-parser");
var bcrypt = require('bcryptjs');
const cors = require('cors')
var dotenv = require("dotenv")
dotenv.config();


exports.addComplaint = (req, res) => {

    mongoose.set('useFindAndModify', false);

    if (req.body.radio === "Hostel") {

        const foundUser = Hostel.findOne({ "email": req.body.email }).then((Email) => {

            if (Email !== null) {

                var conditions = { email: req.body.email },
                    update = { $push: { comp: req.body.comp, suggetion: req.body.suggetion, date: req.body.date, status: "pending" } },
                    options = { multi: true };


                Hostel.findOneAndUpdate(conditions, update, options, callback);

                function callback(numAffected) {
                    res.send("successfully hostel data added")
                }
            } else {
                var createHostelData = new Hostel(req.body)
                createHostelData.save()
                    .then(res.send("successfully hostel data created"))
            }
        })
    } else if (req.body.radio == "Academics") {
        const foundUser = Academic.findOne({ "email": req.body.email }).then((Email) => {
            if (Email !== null) {
                var condition = { email: req.body.email },
                    updat = { $push: { comp: req.body.comp, suggetion: req.body.suggetion, date: req.body.date, status: "pending" } },
                    option = { multi: true };


                Academic.findOneAndUpdate(condition, updat, option, callback);

                function callback(numAffected) {
                    res.send("successfully Academic data added")
                }
            } else {
                var createAcademicData = new Academic(req.body)
                createAcademicData.save()
                    .then(res.send("successfully Academic data created"))
            }
        });


    } else if (req.body.radio == "Ragging") {
        const foundUser = Ragging.findOne({ "email": req.body.email }).then((Email) => {
            if (Email !== null) {
                var Raggingcondition = { email: req.body.email },
                    RaggingUpdate = { $push: { comp: req.body.comp, suggetion: req.body.suggetion, date: req.body.date, status: "pending" } },
                    Raggingoption = { multi: true };


                Ragging.findOneAndUpdate(Raggingcondition, RaggingUpdate, Raggingoption, callback);

                function callback(numAffected) {
                    //   console.log(numAffected)
                    res.send("successfully Academic data added")
                }
            } else {
                var createRaggingData = new Ragging(req.body)
                createRaggingData.save()
                    .then(res.send("successfully Ragging data created"))
            }
        });


    } else if (req.body.radio == "Transport") {
        const foundUser = Transport.findOne({ "email": req.body.email }).then((Email) => {
            if (Email !== null) {
                var Transportcondition = { email: req.body.email },
                    TransportUpdate = { $push: { comp: req.body.comp, suggetion: req.body.suggetion, date: req.body.date, status: "pending" } },
                    Transportoption = { multi: true };


                Transport.findOneAndUpdate(Transportcondition, TransportUpdate, Transportoption, callback);

                function callback(numAffected) {
                    //   console.log(numAffected)
                    res.send("successfully Transport data added")
                }
            } else {
                var createTransportData = new Transport(req.body)
                createTransportData.save()
                    .then(res.send("successfully Transport data created"))
            }
        });


    } else if (req.body.radio == "Others") {
        const foundUser = Other.findOne({ "email": req.body.email }).then((Email) => {
            if (Email !== null) {
                var Othercondition = { email: req.body.email },
                    OtherUpdate = { $push: { comp: req.body.comp, suggetion: req.body.suggetion, date: req.body.date, status: "pending" } },
                    Otheroption = { multi: true };


                Other.findOneAndUpdate(Othercondition, OtherUpdate, Otheroption, callback);

                function callback(numAffected) {
                    //   console.log(numAffected)
                    res.send("successfully Other data added")
                }
            } else {
                var createOtherData = new Other(req.body)
                createOtherData.save()
                    .then(res.send("successfully Other data created"))
            }
        });


    } else {
        res.status(404).send("unable connect database");
    }
}

exports.getComplaintData = (req, res) => {
    if (req.body.section === "HOSTEL") {
        Hostel.find({}).then((done) => {
            res.send(done)
        })
    } else if (req.body.section === "ACADEMIC") {
        Academic.find({}).then((done) => {
            res.send(done)
        })
    } else if (req.body.section === "TRANSPORT") {
        Transport.find({}).then((done) => {
            res.send(done)
        })
    } else if (req.body.section === "RAGGING") {
        Ragging.find({}).then((done) => {
            res.send(done)
        })
    } else if (req.body.section === "OTHERS") {
        Other.find({}).then((done) => {
            res.send(done)
        })
    }
}


exports.getComplaintDataCount = async(req, res) => {

    var totalArray = [];

    var hostelArray = await Hostel.find({}).then(function(done) {
        var sum = 0
        for (let index = 0; index < done.length; index++) {

            sum = sum + done[index].comp.length;
        }
        return sum;
    });
    totalArray.push(hostelArray);


    var academicArray = await Academic.find({}).then((done) => {

        var sum = 0
        for (let index = 0; index < done.length; index++) {

            sum = sum + done[index].comp.length;
        }
        return sum;
    });
    totalArray.push(academicArray);

    var raggingArray = await Ragging.find({}).then((done) => {
        var sum = 0
        for (let index = 0; index < done.length; index++) {

            sum = sum + done[index].comp.length;
        }
        return sum;
    });
    totalArray.push(raggingArray);

    var transportArray = await Transport.find({}).then((done) => {
        var sum = 0
        for (let index = 0; index < done.length; index++) {

            sum = sum + done[index].comp.length;
        }
        return sum;

    });
    totalArray.push(transportArray);

    var otherArray = await Other.find({}).then((done) => {
        var sum = 0
        for (let index = 0; index < done.length; index++) {

            sum = sum + done[index].comp.length;
        }
        return sum;
    })
    totalArray.push(otherArray);

    res.status(200).send(totalArray);

}

exports.getComplaintCount = async(req, res) => {

    var totalArray = []

    var hostelArray = await Hostel.findOne({ "email": req.body.Email }).then(function(done) {

        try {
            return done.comp.length;
        } catch (error) {
            return 0;
        }
    });
    totalArray.push(hostelArray);

    var academicArray = await Academic.findOne({ "email": req.body.Email }).then((done) => {

        try {
            return done.comp.length;
        } catch (error) {
            return 0;
        }
    });
    totalArray.push(academicArray);

    var raggingArray = await Ragging.findOne({ "email": req.body.Email }).then((done) => {
        try {
            return done.comp.length;
        } catch (error) {
            return 0;
        }
    });
    totalArray.push(raggingArray);

    var transportArray = await Transport.findOne({ "email": req.body.Email }).then((done) => {
        try {
            return done.comp.length;
        } catch (error) {
            return 0;
        }

    });
    totalArray.push(transportArray);

    
    var otherArray = await Other.findOne({ "email": req.body.Email }).then((done) => {
        try {
            return done.comp.length;
        } catch (error) {
            return 0;
        }
    })
    totalArray.push(otherArray);

    res.status(200).send(totalArray);

}

exports.getDetailsForChart = async(req,res) => {
    var totalArray = []

    var hostelArray = await Hostel.findOne({ "email": req.query.Email }).then(function(done) {

        try {
            return done;
        } catch (error) {
            return 0;
        }
    });
    totalArray.push(hostelArray);

    var academicArray = await Academic.findOne({ "email": req.query.Email }).then((done) => {

        try {
            return done;
        } catch (error) {
            return 0;
        }
    });
    totalArray.push(academicArray);

    var raggingArray = await Ragging.findOne({ "email": req.query.Email }).then((done) => {
        try {
            return done;
        } catch (error) {
            return 0;
        }
    });
    totalArray.push(raggingArray);

    var transportArray = await Transport.findOne({ "email": req.query.Email }).then((done) => {
        try {
            return done;
        } catch (error) {
            return 0;
        }

    });
    totalArray.push(transportArray);

    
    var otherArray = await Other.findOne({ "email": req.query.Email }).then((done) => {
        try {
            return done;
        } catch (error) {
            return 0;
        }
    })
    totalArray.push(otherArray);

    res.send(totalArray)
}