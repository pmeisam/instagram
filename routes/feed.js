var express = require('express');
var router = express.Router();
var feedCtrl = require('../controllers/feed');
var User = require('../models/user')

router.get('/', isLoggedIn, feedCtrl.index);






function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) {
        return next();
    }
    else res.redirect('/auth/google');
}
  
module.exports = router;