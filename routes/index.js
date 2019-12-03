var express = require('express');
var router = express.Router();
var XLSX = require('xlsx');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lpm', function(req, res, next){
  res.render('lpm-campbell-stokes');
});

router.get('/irm-gunbellani', function(req, res, next){
  res.render('irm-gunbellani');
});

router.get('/irm-actinograph', function(req, res, next){
  res.render('irm-actinograph');
});

router.get('/upload-lpm', function(req, res, next){
  var workbook = XLSX.readFile('public/96525.xlsx');
  var worksheet = workbook.Sheets['Lama Peny'];
  console.log(worksheet);
});

module.exports = router;
