var express = require('express');
var router = express.Router();
var feedCtrl = require('../controllers/feed');

router.get('/', feedCtrl.show);

module.exports = router;