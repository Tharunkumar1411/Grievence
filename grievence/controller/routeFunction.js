var {User,Hostel,Academic,Sport} = require('../ser/DB/Schema')
var jwt = require("jsonwebtoken");
var mongoose = require('mongoose');
const { json } = require("body-parser");



//generate jwt token
exports.jwt =  (req,res) => {
    // console.log("hi")
    const foundUser =  User.findOne({"password":req.body.password});
    if(foundUser){
        const token = jwt.sign({_id:foundUser._id},process.env.TOKEN_SECRET);
        res.header('authorization').send(token)
       
    }else{
        var datas = new User(req.body)
        datas.save()
        .then(item =>{
            const token = jwt.sign({_id:foundUser._id},process.env.TOKEN_SECRET);
            res.header('authorization').send(token)
  
        })
        .catch(err => {
            res.status(404).send("unable connect database");
        });
    }
}

exports.test = (req,res) => {
  res.send("hello")
}
//add complaints into separate collection documents
exports.addComplaint = (req,res) => {
    console.log(req.body)
    mongoose.set('useFindAndModify', false);
    if(req.body.radio === "Hostel"){
      
        var conditions = { radio:req.body.radio }
        , update = { $push: { comp:[req.body.comp]}}
        , options = { multi: true };
        var update2 = { $push: { suggetion:req.body.suggetion}}

      Hostel.findOneAndUpdate(conditions, update, options, callback);
      Hostel.findOneAndUpdate(conditions, update2, options, callback);
      res.send(res.body)
      function callback (err, numAffected) {
    //   console.log(numAffected)
      }
    }
      else if(req.body.radio == "Sports"){
        var conditionss = { radio:req.body.radio }
        , updatee = { $push: { comp:req.body.comp}}
        , optionss = { multi: true };
        var updatee2 = { $push: { suggetion:req.body.suggetion}}
      Sport.findOneAndUpdate(conditionss, updatee, optionss, callback);
      Sport.findOneAndUpdate(conditionss, updatee2, optionss, callback);
      
      function callback (err, numAffected) {
    //   console.log(numAffected)
      }
      }
      else if(req.body.radio == "Academics"){

        var condition = { radio:req.body.radio }
        , updat = { $push: { comp:req.body.comp}}
        , option = { multi: true };

        var updat2 = { $push: { suggetion:req.body.suggetion}}
      Academic.findOneAndUpdate(condition, updat, option, callback);
      Academic.findOneAndUpdate(condition, updat2, option, callback);
      
      function callback (err, numAffected) {
    //   console.log(numAffected)
      }
      }
      else{
        res.status(404).send("unable connect database");
      }
  }


exports.fetchAcademicComplaints = (req,res) => {
  const foundUser =Academic.findOne({}, (err,todos) => {
    if(err) return res.send("err")
    console.log(todos)
  });
}


// exports.fetchSportsComplaints = (req,res) => {
//   const foundUser =Academic.findOne({}, (err,todos) => {
//     if(err) return res.send("err")
//     console.log(todos)
//   });
// }
// exports.fetchHostelComplaints = (req,res) => {
//   const foundUser =Academic.findOne({}, (err,todos) => {
//     if(err) return res.send("err")
//     console.log(todos)
//   });
// }
// exports.fetchRaggingComplaints = (req,res) => {
//   const foundUser =Ragging.findOne({}, (err,todos) => {
//     if(err) return res.send("err")
//     console.log(todos)
//   });
// }
// exports.fetchothersComplaints = (req,res) => {
//   const foundUser =Academic.findOne({}, (err,todos) => {
//     if(err) return res.send("err")
//     console.log(todos)
//   });
// }
// exports.fetchTransportComplaints = (req,res) => {
//   const foundUser =Academic.findOne({}, (err,todos) => {
//     if(err) return res.send("err")
//     console.log(todos)
//   });
// }

// exports.getComplainstNumber = (req,res) => {
//   // Hostel.find({},{"comp":""}).then(item => {
//   //    console.log(item)
//   //   })

//   Hostel.aggregate([{$project:{hostelCount:{$size:"$comp"}}}]).then(hostelCount => {

//     res.send(hostelCount)
  
// })



// }
    
      


