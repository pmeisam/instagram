var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */

router.get('/', function (req, res) {
  res.render('index', { title: 'Meisagram' });
})

router.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);
router.get('/auth/google/callback',
passport.authenticate('google', {
  successRedirect: '/feed',
  failureRedirect: '/'
}
));
// router.get('/auth/feed', (req, res)=> res.render('meisagram/feed', { title: 'Meisagram' }))

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;