var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_58/index', { id: '409411658',title:'Crown2' });
});

module.exports = router;
