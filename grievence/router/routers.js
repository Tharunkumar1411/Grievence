var express = require("express");
var router = express.Router();

var AuthFunctions = require('../controller/AuthFunctions');
var ComplaintFunctions = require('../controller/ComplaintFunctions');
var AccountFunctions = require('../controller/AccountFunctions');
const passport = require("passport");

//Passport.js auth




//Auth

router.put("/signIn", AuthFunctions.signIn);
router.put('/jwt', AuthFunctions.jwt);


//complaint
router.post("/addComplaint", ComplaintFunctions.addComplaint);
router.put("/getComplaintData", ComplaintFunctions.getComplaintData);
router.post("/getComplaintCount", ComplaintFunctions.getComplaintCount);
router.put("/getComplaintDataCount", ComplaintFunctions.getComplaintDataCount);
router.get("/getDetailsForChart", ComplaintFunctions.getDetailsForChart);

//Account
router.put("/deleteAccount", AccountFunctions.deleteAccount);
router.put("/getUserdetails", AccountFunctions.getUserdetails);
router.put("/getTotalUserDetails", AccountFunctions.getTotalUserDetails);
router.put("/removeRespondedData", AccountFunctions.removeRespondedData);

module.exports = router;