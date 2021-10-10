var mongoose = require('mongoose');

var nameSchema = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    logedIn: {
        type: String
    },
});
var User = mongoose.model("User", nameSchema);

var hostelSchema = new mongoose.Schema({
    radio: {
        type: String
    },
    email: {
        type: String
    },
    comp: {
        type: Array
    },
    suggetion: {
        type: Array
    },
    date: { type: Array },
    
    status: {
        type: String
    }

});
var Hostel = mongoose.model("Hostel", hostelSchema);

var academicsSchema = new mongoose.Schema({
    radio: {
        type: String
    },
    email: {
        type: String
    },
    comp: {
        type: Array
    },
    suggetion: {
        type: Array
    },
    date: { 
        type: Array 
    },
    status: {
        type: Array
    }
});
var Academic = mongoose.model("Academic", academicsSchema);



var raggingSchema = new mongoose.Schema({
    radio: {
        type: String
    },
    email: {
        type: String
    },
    comp: {
        type: Array
    },
    suggetion: {
        type: Array
    },
    date: { 
        type: Array 
    },
    status: {
        type: Array
    }

});
var Ragging = mongoose.model("Ragging", raggingSchema);

var transportSchema = new mongoose.Schema({
    radio: {
        type: String
    },
    email: {
        type: String
    },
    comp: {
        type: Array
    },
    suggetion: {
        type: Array
    },
    date: { 
        type: Array 
    },
    status: {
        type: Array
    }

});
var Transport = mongoose.model("Transport", transportSchema);


var otherSchema = new mongoose.Schema({
    radio: {
        type: String
    },
    email: {
        type: String
    },
    comp: {
        type: Array
    },
    suggetion: {
        type: Array
    },
    date: { 
        type: Array 
    },
    status: {
        type: Array
    }
});
var Other = mongoose.model("Other", otherSchema);

module.exports = { User, Hostel, Academic, Transport, Other, Ragging };