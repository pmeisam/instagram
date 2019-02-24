var express = require('express');
var router = express.Router();
var profileCtrl = require('../controllers/profile');

router.get('/', isLoggedIn, profileCtrl.show);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;