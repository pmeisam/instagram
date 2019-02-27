var express = require('express');
var router = express.Router();
var likesCtrl = require('../controllers/likes');

router.get('/', isLoggedIn, likesCtrl.show);
router.post('/:id', isLoggedIn, likesCtrl.addLike);
router.post('/comments/:id', isLoggedIn, likesCtrl.addComment);
router.delete('/:i_id/comments/:c_id', isLoggedIn, likesCtrl.delete);







function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;