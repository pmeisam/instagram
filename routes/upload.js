var express = require('express');
var router = express.Router();
var uploadCtrl = require('../controllers/upload');

router.get('/', uploadCtrl.show);
router.post('/', uploadCtrl.create);

module.exports = router;