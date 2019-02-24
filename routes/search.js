var express = require('express');
var router = express.Router();
var searchCtrl = require('../controllers/search');

router.get('/', isLoggedIn, searchCtrl.show);






function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;