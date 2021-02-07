const router = require('express').Router();
const passport = require('passport');

//router for auth with goggle+
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

//callback route for google to redirect to 
router.get('/google/redirect',passport.authenticate('google'),(req,res) => {
    res.send('you reached the redirect URL');
})

module.exports = router