var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dropee Challenge' });
});

router.get('/calendar', function(req, res, next) {
  res.render('calendar', { title: 'Dropee Calendar' });
});

router.get('/chart', function(req, res, next) {
  res.render('chart', { title: 'Dropee Chart' });
});

module.exports = router;
