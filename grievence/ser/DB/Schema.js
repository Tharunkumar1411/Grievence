var mongoose = require('mongoose');

var nameSchema = new mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    }
});
var User = mongoose.model("User",nameSchema);

var hostelSchema = new mongoose.Schema({
    radio:{
        type:String
    },
    email:{
        type:String
    },
    comp:{
        type:Array
    },
    suggetion:{
        type:Array
    }

});
var Hostel = mongoose.model("Hostel",hostelSchema);

var academicsSchema = new mongoose.Schema({
    radio:{
        type:String
    },
    email:{
        type:String
    },
    comp:{
        type:Array
    },
    suggetion:{
        type:Array
    }

});
var Academic = mongoose.model("Academic",academicsSchema);

var sportsSchema = new mongoose.Schema({
    radio:{
        type:String
    },
    email:{
        type:String
    },
    comp:{
        type:Array
    },
    suggetion:{
        type:Array
    }

});
var Sport = mongoose.model("Sport",sportsSchema);

module.exports  = {User,Hostel,Academic,Sport};