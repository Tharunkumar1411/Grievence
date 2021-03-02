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
        // const token = jwt.sign({_id:foundUser._id},process.env.TOKEN_SECRET);
        // res.header('authorization').send(token)
       
        res.send("user already exist")
       
    }else{
        var datas = new User(req.body)
        console.log(req.body)
        datas.save()
        .then(item =>{
            // const token = jwt.sign({_id:foundUser._id},process.env.TOKEN_SECRET);
            // res.header('authorization').send(token)
            res.send("new user added")
  
        })
        .catch(err => {
            res.status(404).send("unable connect database");
        });
    }
})


//add complaints into separate collection documents
exports.addComplaint = (req,res) => {

    console.log(req.body)
    mongoose.set('useFindAndModify', false);

    if(req.body.radio === "Hostel"){
      
        const foundUser =  Hostel.findOne({"email":req.body.email}).then((Email) => {
          console.log(Email)
          if(Email !== null){
            
              var conditions = { email:req.body.email }
              , update ={ $push: { comp:req.body.comp,suggetion:req.body.suggetion}}
              , options = { multi: true };
        

            Hostel.findOneAndUpdate(conditions, update, options,callback);
          
            function callback (err, numAffected) {
          //   console.log(numAffected)
          res.send("successfully hostel data added")
            }
      }else{
        var createHostelData = new Hostel(req.body)
        createHostelData.save()
        .then(res.send("successfully hostel data created"))
      }
          })
        
    }
      else if(req.body.radio == "Sports"){
        const foundUser =  Sport.findOne({"email":req.body.email}).then((Email) => {
          if(Email !== null){
            var conditionss = { email:req.body.email }
            , updatee = { $push: { comp:req.body.comp,suggetion:req.body.suggetion}}
            , optionss = { multi: true };
  
          Sport.findOneAndUpdate(conditionss, updatee, optionss,callback);
    

          function callback (err, numAffected) {
        //   console.log(numAffected)
        res.send("successfully Sport data added")
          }
  }else{
    var createSportData = new Sport(req.body)
    createSportData.save()
    .then(res.send("successfully Sport data created"))
  }
 
        });
        
      }
      else if(req.body.radio == "Academics"){
        const foundUser =  Academic.findOne({"email":req.body.email}).then((Email) => {
          if(Email !== null){
            var condition = { email:req.body.email }
            , updat = { $push: { comp:req.body.comp,suggetion:req.body.suggetion}}
            , option = { multi: true };
    
  
          Academic.findOneAndUpdate(condition, updat, option,callback);
  
          function callback (err, numAffected) {
        //   console.log(numAffected)
        res.send("successfully Academic data added")
          }
    }else{
      var createAcademicData = new Academic(req.body)
      createAcademicData.save()
      .then(res.send("successfully Academic data created"))
    }
        });
       
      
      }

      else if(req.body.radio == "Ragging"){
        const foundUser =  Ragging.findOne({"email":req.body.email}).then((Email) => {
          if(Email !== null){
            var Raggingcondition = { email:req.body.email }
            , RaggingUpdate = { $push: { comp:req.body.comp, suggetion:req.body.suggetion}}
            , Raggingoption = { multi: true };
    
    
          Ragging.findOneAndUpdate(Raggingcondition, RaggingUpdate, Raggingoption,callback);
    
          function callback (err, numAffected) {
        //   console.log(numAffected)
        res.send("successfully Academic data added")
          }
    }else{
      var createRaggingData = new Ragging(req.body)
      createRaggingData.save()
      .then(res.send("successfully Ragging data created"))
    }
        });
       
      
      }

      else if(req.body.radio == "Transport"){
        const foundUser =  Transport.findOne({"email":req.body.email}).then((Email) => {
          if(Email !== null){
            var Transportcondition = { email:req.body.email }
            , TransportUpdate = { $push: { comp:req.body.comp,suggetion:req.body.suggetion}}
            , Transportoption = { multi: true };
    
  
          Transport.findOneAndUpdate(Transportcondition, TransportUpdate, Transportoption,callback);
  
          function callback (err, numAffected) {
        //   console.log(numAffected)
        res.send("successfully Transport data added")
          }
    }else{
      var createTransportData = new Transport(req.body)
      createTransportData.save()
      .then(res.send("successfully Transport data created"))
    }
        });
        
      
      }
      
      else if(req.body.radio == "Others"){
        const foundUser =  Other.findOne({"email":req.body.email}).then((Email) => {
          if(Email !== null){
            var Othercondition = { email:req.body.email }
            , OtherUpdate = { $push: { comp:req.body.comp,suggetion:req.body.suggetion}}
            , Otheroption = { multi: true };
    
        
          Other.findOneAndUpdate(Othercondition, OtherUpdate, Otheroption,callback);
      
          function callback (err, numAffected) {
        //   console.log(numAffected)
        res.send("successfully Other data added")
          }
    }else{
      var createOtherData = new Other(req.body)
      createOtherData.save()
      .then(res.send("successfully Other data created"))
    }
        });
      
      
      }

      else{
        res.status(404).send("unable connect database");
      }
  }

exports.getHostelComplaints = (req,res) => {
  Hostel.find({},'comp').then((done) => {
  console.log(array)


  })

}

exports.getSportsComplaints = (req,res) => {
  Sport.findOne({"email":req.body.Email}).then((hostels) => {
 
    res.send(hostels)

  })
}

exports.getAcademicComplaints = (req,res) => {
  Academic.findOne({"email":req.body.Email}).then((hostels) => {
 
    res.send(hostels)

  })
}

exports.getRaggingComplaints = (req,res) => {
  Ragging.findOne({"email":req.body.Email}).then((hostels) => {
 
    res.send(hostels)

  })
}

exports.getTransportComplaints = (req,res) => {
  Transport.findOne({"email":req.body.Email}).then((hostels) => {
 
    res.send(hostels)

  })
}

exports.getUnknownComplaints = (req,res) => {
  Other.findOne({"email":req.body.Email}).then((hostels) => {
 
    res.send(hostels)

  })
}



exports.HostelComplaints = (req,res) => {
  Hostel.findOne({"email":req.body.Email}).then((hostels) => {
 
    res.send(hostels);

  })
}
