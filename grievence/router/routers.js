var express = require("express");
var router = express.Router();

const passport = require('passport');
var AuthFunctions = require('../controller/AuthFunctions');
var ComplaintFunctions = require('../controller/ComplaintFunctions');
var AccountFunctions = require('../controller/AccountFunctions');



//Auth

router.put("/signIn", AuthFunctions.signIn);
router.put('/jwt', AuthFunctions.jwt);


//complaint
router.post("/addComplaint", ComplaintFunctions.addComplaint);
router.put("/getComplaintData", ComplaintFunctions.getComplaintData);
router.post("/getComplaintCount", ComplaintFunctions.getComplaintCount);
router.put("/getComplaintDataCount", ComplaintFunctions.getComplaintDataCount);

//Account
router.put("/deleteAccount", AccountFunctions.deleteAccount);
router.put("/getUserdetails", AccountFunctions.getUserdetails);
router.put("/getTotalUserDetails", AccountFunctions.getTotalUserDetails);
router.put("/removeRespondedData", AccountFunctions.removeRespondedData);

module.exports = router;