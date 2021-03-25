var { User, Hostel, Academic, Ragging, Transport, Other } = require('../ser/DB/Schema')
var jwt = require("jsonwebtoken");
var mongoose = require('mongoose');
const { json } = require("body-parser");
var bcrypt = require('bcryptjs');
const cors = require('cors')
var dotenv = require("dotenv")
dotenv.config();

//verify token
exports.jwt = (async(req, res) => {


    var token = req.body.jwt;

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        // res.send(decoded)

        const foundUser = User.findOne({ "_id": decoded.id }).then((result) => {
            res.send(result.email)
        })

    })

});


//generate token and create new user db
exports.signIn = (async(req, res) => {

    var hashing = await bcrypt.hashSync(req.body.password, 8);

    console.log(req.body)
    User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashing,
            logedIn: new Date().toLocaleDateString(),
        },

        function(err, user) {
            if (err) return res.status(500).send("issues to registering a user");

            const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '8760hr' });

            res.status(200).send({ auth: true, token: token });
        })
});


exports.deleteAccount = (req, res) => {
    User.deleteOne({ "email": req.body.cook }).then((done) => {
        res.send(true)
    })
}

//add complaints into separate collection documents
exports.addComplaint = (req, res) => {

    console.log(req.body)
    mongoose.set('useFindAndModify', false);

    if (req.body.radio === "Hostel") {

        const foundUser = Hostel.findOne({ "email": req.body.email }).then((Email) => {
            console.log(Email)
            if (Email !== null) {

                var conditions = { email: req.body.email },
                    update = { $push: { comp: req.body.comp, suggetion: req.body.suggetion, date: req.body.date } },
                    options = { multi: true };


                Hostel.findOneAndUpdate(conditions, update, options, callback);

                function callback(numAffected) {
                    //   console.log(numAffected)
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
                    updat = { $push: { comp: req.body.comp, suggetion: req.body.suggetion, date: req.body.date } },
                    option = { multi: true };


                Academic.findOneAndUpdate(condition, updat, option, callback);

                function callback(numAffected) {
                    //   console.log(numAffected)
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
                    RaggingUpdate = { $push: { comp: req.body.comp, suggetion: req.body.suggetion, date: req.body.date } },
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
                    TransportUpdate = { $push: { comp: req.body.comp, suggetion: req.body.suggetion, date: req.body.date } },
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
                    OtherUpdate = { $push: { comp: req.body.comp, suggetion: req.body.suggetion, date: req.body.date } },
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

exports.getHostelComplaints = (req, res) => {
    Hostel.find({}).then((done) => {
        res.send(done)
    })

}


exports.getAcademicComplaints = (req, res) => {
    Academic.find({}).then((done) => {
        res.send(done)
    })
}

exports.getRaggingComplaints = (req, res) => {
    Ragging.find({}).then((done) => {
        res.send(done)
    })
}

exports.getTransportComplaints = (req, res) => {
    Transport.find({}).then((done) => {
        res.send(done)
    })
}

exports.getUnknownComplaints = (req, res) => {
    Other.find({}).then((done) => {
        res.send(done)
    })

}


exports.getUserdetails = (req, res) => {

    User.find({ "email": req.body.Email }).then((done) => {
        res.send(done)
    })
}


//user individual count of complaints
exports.getHostelComplaint = (req, res) => {

    Hostel.findOne({ "email": req.body.Email }).then((done) => {
        res.status(200).send(done);

    })

}


exports.getAcademicComplaint = (req, res) => {
    Academic.findOne({ "email": req.body.Email }).then((done) => {
        res.status(200).send(done);

    })
}

exports.getRaggingComplaint = (req, res) => {
    Ragging.findOne({ "email": req.body.Email }).then((done) => {
        res.status(200).send(done);
    })
}

exports.getTransportComplaint = (req, res) => {
    Transport.findOne({ "email": req.body.Email }).then((done) => {
        res.status(200).send(done);

    })
}

exports.getUnknownComplaint = (req, res) => {
    Other.findOne({ "email": req.body.Email }).then((done) => {
        res.status(200).send(done);

    })

}