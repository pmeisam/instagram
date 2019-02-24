var express = require('express');
var router = express.Router();
var feedCtrl = require('../controllers/feed');

router.get('/', isLoggedIn, feedCtrl.show);








function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;