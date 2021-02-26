var express = require("express");
var router = express.Router();

const passport = require('passport');
var routeFunction = require('../controller/routeFunction');

router.post("/jwt",routeFunction.jwt);
// router.put("/test",routeFunction.test);

// router.put('/auth/google',passport.authenticate('google',{
//     scope:['profile']
// }));

//callback route for google to redirect to 
// router.put('/auth/google/redirect',passport.authenticate('google'),(req,res) => {
//     res.send('you reached the redirect URL');
// })

router.post("/addComplaint",routeFunction.addComplaint);

router.put("/getHostelComplaints",routeFunction.getHostelComplaints)
router.put("/getSportsComplaints",routeFunction.getSportsComplaints)
router.put("/getAcademicComplaints",routeFunction.getAcademicComplaints)
router.put("/getRaggingComplaints",routeFunction.getRaggingComplaints)
router.put("/getTransportComplaints",routeFunction.getTransportComplaints)
router.put("/getUnknownComplaints",routeFunction.getUnknownComplaints)
router.put("/HostelComplaints",routeFunction.HostelComplaints)
module.exports = router