var {User,Hostel,Academic,Sport,Ragging,Transport,Other} = require('../ser/DB/Schema')
var jwt = require("jsonwebtoken");
var mongoose = require('mongoose');
const { json } = require("body-parser");
const cors = require('cors')


//generate jwt token
exports.jwt =  ( async (req,res) => {
    // console.log("hi")
    const foundUser = await User.findOne({"email":req.body.email});
    if(foundUser){
        const token = jwt.sign({_id:foundUser._id},process.env.TOKEN_SECRET);
        res.header('authorization').send(token)
       
    }else{
        var datas = new User(req.body)
        console.log(req.body)
        datas.save()
        .then(item =>{
            const token = jwt.sign({_id:foundUser._id},process.env.TOKEN_SECRET);
            res.header('authorization').send(token)
  
        })
        .catch(err => {
            res.status(404).send("unable connect database");
        });
    }
})


//add complaints into separate collection documents
exports.addComplaint =(async (req,res) => {
  
    console.log(req.body)
    mongoose.set('useFindAndModify', false);

    if(req.body.radio === "Hostel"){
      const foundUser = await Hostel.findOne({"email":req.body.email});
      if(foundUser){
              var conditions = { email:req.body.email }
              , update = { $push: { comp:[req.body.comp]}}
              , options = { multi: true };
              var update2 = { $push: { suggetion:req.body.suggetion}}

            Hostel.findOneAndUpdate(conditions, update, options, callback);
            Hostel.findOneAndUpdate(conditions, update2, options, callback);
            
            function callback (err, numAffected) {
          //   console.log(numAffected)
          res.send("successfully hostel data added")
            }
      }else{
        var createHostelData = new Hostel(req.body)
        createHostelData.save()
        .then(res.send("successfully hostel data created"))
      }
        
    }
      else if(req.body.radio == "Sports"){
        const foundUser = await Sport.findOne({"email":req.body.email});
        if(foundUser){
                  var conditionss = { email:req.body.email }
                  , updatee = { $push: { comp:req.body.comp}}
                  , optionss = { multi: true };
                  var updatee2 = { $push: { suggetion:req.body.suggetion}}
                Sport.findOneAndUpdate(conditionss, updatee, optionss, callback);
                Sport.findOneAndUpdate(conditionss, updatee2, optionss, callback);
                
                function callback (err, numAffected) {
              //   console.log(numAffected)
              res.send("successfully Sport data added")
                }
        }else{
          var createSportData = new Sport(req.body)
          createSportData.save()
          .then(res.send("successfully Sport data created"))
        }
       
      }
      else if(req.body.radio == "Academics"){
        const foundUser = await Academic.findOne({"email":req.body.email});
        if(foundUser){
                var condition = { email:req.body.email }
                , updat = { $push: { comp:req.body.comp}}
                , option = { multi: true };
        
                var updat2 = { $push: { suggetion:req.body.suggetion}}
              Academic.findOneAndUpdate(condition, updat, option, callback);
              Academic.findOneAndUpdate(condition, updat2, option, callback);
              
              function callback (err, numAffected) {
            //   console.log(numAffected)
            res.send("successfully Academic data added")
              }
        }else{
          var createAcademicData = new Academic(req.body)
          createAcademicData.save()
          .then(res.send("successfully Academic data created"))
        }
      
      }

      else if(req.body.radio == "Ragging"){
        const foundUser = await Ragging.findOne({"email":req.body.email});
        if(foundUser){
                var Raggingcondition = { email:req.body.email }
                , RaggingUpdate = { $push: { comp:req.body.comp}}
                , Raggingoption = { multi: true };
        
                var RaggingUpdate1 = { $push: { suggetion:req.body.suggetion}}
              Ragging.findOneAndUpdate(Raggingcondition, RaggingUpdate, Raggingoption, callback);
              Ragging.findOneAndUpdate(Raggingcondition,RaggingUpdate1, Raggingoption, callback);
              
              function callback (err, numAffected) {
            //   console.log(numAffected)
            res.send("successfully Academic data added")
              }
        }else{
          var createRaggingData = new Ragging(req.body)
          createRaggingData.save()
          .then(res.send("successfully Ragging data created"))
        }
      
      }

      else if(req.body.radio == "Transport"){
        const foundUser = await Transport.findOne({"email":req.body.email});
        if(foundUser){
                var Transportcondition = { email:req.body.email }
                , TransportUpdate = { $push: { comp:req.body.comp}}
                , Transportoption = { multi: true };
        
                var TransportUpdate1 = { $push: { suggetion:req.body.suggetion}}
              Transport.findOneAndUpdate(Transportcondition, TransportUpdate, Transportoption, callback);
              Transport.findOneAndUpdate(Transportcondition,TransportUpdate1, Transportoption, callback);
              
              function callback (err, numAffected) {
            //   console.log(numAffected)
            res.send("successfully Transport data added")
              }
        }else{
          var createTransportData = new Transport(req.body)
          createTransportData.save()
          .then(res.send("successfully Transport data created"))
        }
      
      }
      
      else if(req.body.radio == "Others"){
        const foundUser = await Other.findOne({"email":req.body.email});
        if(foundUser){
                var Othercondition = { email:req.body.email }
                , OtherUpdate = { $push: { comp:req.body.comp}}
                , Otheroption = { multi: true };
        
                var OtherUpdate1 = { $push: { suggetion:req.body.suggetion}}
              Other.findOneAndUpdate(Othercondition, OtherUpdate, Otheroption, callback);
              Other.findOneAndUpdate(Othercondition,OtherUpdate1, Otheroption, callback);
              
              function callback (err, numAffected) {
            //   console.log(numAffected)
            res.send("successfully Other data added")
              }
        }else{
          var createOtherData = new Other(req.body)
          createOtherData.save()
          .then(res.send("successfully Other data created"))
        }
      
      }

      else{
        res.status(404).send("unable connect database");
      }
  })


exports.getHostelComplaints = (req,res) => {
  
  Hostel.aggregate([{$project: { count: { $size:"$comp" }}}]).then(count =>{
    res.send(count)
  })
}

exports.getSportsComplaints = (req,res) => {
  Sport.aggregate([{$project: { count: { $size:"$comp" }}}]).then(count =>{
    res.send(count)
  })
}

exports.getAcademicComplaints = (req,res) => {
  Academic.aggregate([{$project: { count: { $size:"$comp" }}}]).then(count =>{
    res.send(count)
  })
}

exports.getRaggingComplaints = (req,res) => {
  Ragging.aggregate([{$project: { count: { $size:"$comp" }}}]).then(count =>{
    res.send(count)
  })
}

exports.getTransportComplaints = (req,res) => {
  Transport.aggregate([{$project: { count: { $size:"$comp" }}}]).then(count =>{
    res.send(count)
  })
}

exports.getOtherComplaints = (req,res) => {
  Other.aggregate([{$project: { count: { $size:"$comp" }}}]).then(count =>{
    res.send(count)
  })
}




