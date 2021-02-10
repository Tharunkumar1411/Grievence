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

var otherSchema = new mongoose.Schema({
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
var Other = mongoose.model("Other",otherSchema);

var raggingSchema = new mongoose.Schema({
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
var Ragging = mongoose.model("Ragging",raggingSchema);

var transportSchema = new mongoose.Schema({
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
var Transport = mongoose.model("Transport",transportSchema);

module.exports  = {User,Hostel,Academic,Sport,Transport,Other,Ragging};