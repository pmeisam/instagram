var express = require('express');
var router = express.Router();
var profileCtrl = require('../controllers/profile');

router.get('/', isLoggedIn, profileCtrl.show);
router.post('/:id', isLoggedIn, profileCtrl.addLike);
router.post('/comments/:id', isLoggedIn, profileCtrl.addComment);
router.delete('/:i_id/comments/:c_id', profileCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;