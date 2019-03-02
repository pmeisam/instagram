var express = require('express');
var router = express.Router();
var profileCtrl = require('../controllers/profile');

router.get('/:username', isLoggedIn, profileCtrl.show);
router.get('/user/:useradrs', isLoggedIn, profileCtrl.findUser);
router.post('/:id', isLoggedIn, profileCtrl.addLike);
router.post('/comments/:id', isLoggedIn, profileCtrl.addComment);
router.delete('/:i_id/comments/:c_id', profileCtrl.delete);
router.delete('/image/:i_id', profileCtrl.destroyPost);
router.put('/caption/:id', profileCtrl.updatePost);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;