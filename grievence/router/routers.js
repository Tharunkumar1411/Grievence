var express = require("express");
var router = express.Router();

const passport = require('passport');
var routeFunction = require('../controller/routeFunction');

router.post("/jwt",routeFunction.jwt);
router.get("/test",routeFunction.test);

router.get('/auth/google',passport.authenticate('google',{
    scope:['profile']
}));

//callback route for google to redirect to 
router.get('/auth/google/redirect',passport.authenticate('google'),(req,res) => {
    res.send('you reached the redirect URL');
})
router.post("/addComplaint",routeFunction.addComplaint);

router.post("/fetchAcademicComplaints",routeFunction.fetchAcademicComplaints);
// router.post("/fetchSportsComplaints",routeFunction.fetchSportsComplaints);
// router.post("/fetchHostelComplaints",routeFunction.fetchHostelComplaints);
// router.post("/fetchRaggingComplaint",routeFunction.fetchRaggingComplaint);
// router.post("/fetchothersComplaints",routeFunction.fetchothersComplaints);
// router.post("/fetchTransportComplaints",routeFunction.fetchTransportComplaints);
// router.post("/getComplainstNumber",routeFunction.getComplainstNumber);

module.exports = router