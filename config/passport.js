var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../models/insta');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  }, function(accessToken, refreshToken, profile, cb) {
        // new User({
        //     userName: profile.displayName,
        //     googleId: profile.id
        // }).save().then((newUser)=> {
        //     console.log('new user: ' + newUser)
        // })
    User.findOne({ 'googleId' : profile.id }, function(err, user){
  
        console.log('hi')
        if(err) return cb(err);
        if(user){
            console.log('user '+user);
            return cb(null, user);

        }else{
            var newUser = new User({
                userName: profile.displayName,
                googleId: profile.id
            });
            newUser.save(function(err){
                if(err) return cb(err);
                console.log('new user ' + user);
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
    User.findById(id, function(err, user) {
      done(err, user);
    });
});
 