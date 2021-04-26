var express = require("express");
var router = express.Router();

const passport = require('passport');
var routeFunction = require('../controller/routeFunction');

// router.post("/jwt", routeFunction.jwt);
// router.put("/test",routeFunction.test);

// router.put('/auth/google',passport.authenticate('google',{
//     scope:['profile']
// }));

//callback route for google to redirect to 
// router.put('/auth/google/redirect',passport.authenticate('google'),(req,res) => {
//     res.send('you reached the redirect URL');
// })

router.post("/addComplaint", routeFunction.addComplaint);

router.put("/signIn", routeFunction.signIn);
router.put('/jwt', routeFunction.jwt);

router.put("/deleteAccount", routeFunction.deleteAccount);

router.put("/removeRespondedData", routeFunction.removeRespondedData);
router.put("/getUserdetails", routeFunction.getUserdetails);
router.put("/getTotalUserDetails", routeFunction.getTotalUserDetails);
router.put("/getComplaintData", routeFunction.getComplaintData);
router.post("/getComplaintCount", routeFunction.getComplaintCount);
router.put("/getComplaintDataCount", routeFunction.getComplaintDataCount);
router.put('/getTotalUserDetails', routeFunction.getTotalUserDetails);

module.exports = router