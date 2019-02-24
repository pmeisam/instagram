var express = require('express');
var router = express.Router();
var uploadCtrl = require('../controllers/upload');

router.get('/', isLoggedIn,uploadCtrl.show);
router.post('/', uploadCtrl.create);







function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;