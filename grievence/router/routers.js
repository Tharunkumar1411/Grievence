var express = require("express");
var router = express.Router();
var routeFunction = require('../controller/routeFunction');

router.post("/jwt",routeFunction.jwt);
router.post("/test",function(req,res){
    res.send("hello")
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