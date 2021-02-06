const passport = require("passport");
const GoggleStrategy = require("passport-google-oauth20").Strategy;
const keys = require('./keys');
passport.use(
    new GoggleStrategy({
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret,
        callbackURL:'/auth/google/redirect'
    },() => {
        //passport callback function
    })
)