var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Insta = require('../models/insta');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in with OAuth...
    Insta.findOne({'googleId': profile.id}, function(err, user){
        if(err) return cb(err);
        if(user){
            return cb(null, user);
        }else{
            var newUser = new Insta({
                name: profile.displayName,
                googleId: profile.id
            });
            newUser.save(function(err){
                if(err) return cb(err);
                return cb(null, newUser);
            })
        }
    })
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    Insta.findById(id, function(err, user) {
      done(err, user);
    });
});
 