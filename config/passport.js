var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var Insta = require('../models/insta');

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/oauth2callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate( {'facebookId': profile.id } , function(err, user) {      //this is where I'm getting an error
      if (err) { return done(err); }
      done(null, user);
    });
  }
  ));