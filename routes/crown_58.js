var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_58/index', { id: '409411658',name:'TingAn' });
});

module.exports = router;
