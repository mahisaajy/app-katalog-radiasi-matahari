var express = require('express');
var router = express.Router();
var XLSX = require('xlsx');
var moment = require('moment');

const environment = process.env.ENVIRONMENT || 'development'
const config = require('../knexfile.js')[environment];
const knex = require('knex')(config);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lpm', async function(req, res, next){
  let stasiuns = await knex('lpm').leftJoin('stasiuns', 'lpm.id_stasiun', 'stasiuns.id');
  // res.send(stasiuns);
  res.render('lpm-campbell-stokes', {stasiuns: stasiuns, test: "test"});
});

router.get('/irm-gunbellani', function(req, res, next){
  res.render('irm-gunbellani');
});

router.get('/irm-actinograph', function(req, res, next){
  res.render('irm-actinograph');
});

router.get('/test-moment', function(req, res, next){
  var tgl1 = new Date(2017, 1, 10);
  var tgl2 = moment("2017-01-01").format("YYYY-MM-DD");
  // var tgl3 = moment(tgl2).format("YYYY-MM-DD");
  res.send(tgl2);
  // console.log(tgl1);
})

router.get('/download-lpm', async function(req, res, next){
  /* external references:
 - https://rawgit.com/SheetJS/js-xlsx/master/dist/xlsx.full.min.js
  */
  /* original data */
  // var data = [
  //   {"name":"John", "city": "Seattle"},
  //   {"name":"Mike", "city": "Los Angeles"},
  //   {"name":"Zach", "city": "New York"}
  // ];

  let data = await knex('lpm');

  /* this line is only needed if you are not adding a script tag reference */
  if(typeof XLSX == 'undefined') XLSX = require('xlsx');

  /* make the worksheet */
  var ws = XLSX.utils.json_to_sheet(data);

  /* add to workbook */
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "People");

  /* generate an XLSX file */
  XLSX.writeFile(wb, "public/sheetjs.xlsx");
  res.send(data);
});

router.get('/upload-lpm', async function(req, res, next){
  // async function get_data(wmoid_get) {
  //   return await knex('stasiuns').where({wmoid: wmoid_get}).first();
  // }

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  try {

    var workbook = XLSX.readFile('public/96525.xlsx');
    var worksheet = workbook.Sheets['Lama Peny'];
    var desired_cell = worksheet['A1'];

    let wmoid_get = 96525;
    // let dataz = await get_data(wmoid_get);
    let dataz = await knex('stasiuns').where({wmoid: wmoid_get}).first();
    let wmoid = dataz.wmoid;
    let id_stasiun = dataz.id;
    console.log(wmoid);

    var output;

    // var outputs = XLSX.utils.sheet_to_json(worksheet);
    // res.send(outputs);
    // console.log(outputs);

    // let tgl_test = new Date("2017-1-1");
    // console.log("test", tgl_test);



    var range = XLSX.utils.decode_range(worksheet['!ref']);
    for (let rowNum = 1; rowNum <= range.e.r; rowNum++) {
      // console.log(range.e.r);

      let tahun = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 2})];
      let bulan = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 3})];
      let tanggal = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 4})];
      
      let tgl = String(String(tahun.v) + "-" + (("0" + String((parseInt(bulan.v)))).slice(-2)) + "-" + (String(("0" + parseInt(tanggal.v))).slice(-2)));
      // new Date("2017-05-04");
      
      // console.log(tgl);
      console.log(tgl, tahun, bulan, tanggal);

      // let fix_tgl = formatDate(tgl);
      // let fix_tgl = moment(tgl).format("YYYY-MM-DD");
      let p05_06 = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 5})];
      let p06_07 = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 6})];
      let p07_08 = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 7})];
      let p08_09 = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 8})];
      let p09_10 = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 9})];
      let p10_11 = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 10})];
      let p11_12 = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 11})];
      let p12_13 = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 12})];
      let p13_14 = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 13})];
      let p14_15 = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 14})];
      let p15_16 = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 15})];
      let p16_17 = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 16})];
      let p17_18 = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 17})];
      let lpm_p06_p18_jam = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 18})];
      let lpm_p08_p16_percent = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 19})];

      
      output =
      {
        id_stasiun: id_stasiun,
        tgl: tgl,
        p05_06: (p05_06 ? p05_06.v : undefined), 
        p06_07: (p06_07 ? p06_07.v : undefined),
        p07_08: (p07_08 ? p07_08.v : undefined),
        p08_09: (p08_09 ? p08_09.v : undefined),
        p09_10: (p09_10 ? p09_10.v : undefined),
        p10_11: (p10_11 ? p10_11.v : undefined),
        p11_12: (p11_12 ? p11_12.v : undefined),
        p12_13: (p12_13 ? p12_13.v : undefined),
        p13_14: (p13_14 ? p13_14.v : undefined),
        p14_15: (p14_15 ? p14_15.v : undefined),
        p15_16: (p15_16 ? p15_16.v : undefined),
        p16_17: (p16_17 ? p16_17.v : undefined),
        p17_18: (p17_18 ? p17_18.v : undefined),
        lpm_p06_p18_jam: (lpm_p06_p18_jam ? lpm_p06_p18_jam.v : undefined),
        lpm_p08_p16_percent: (lpm_p08_p16_percent ? lpm_p08_p16_percent.v : undefined),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
      };
      // try {
      //   output = array_merge(output, rowz);
      // } catch (error) {
      //   console.log(error); 
      // }

      

      let check_lpm = await knex('lpm').where({id_stasiun: id_stasiun, tgl: tgl}).limit(1);
      console.log(check_lpm);
      if (check_lpm === undefined || check_lpm.length == 0) {
        await knex('lpm').insert(output)
        // .then(() => {
        //     // console.log('Import data done!')
        //     // process.exit(0)
        // })
      } else {
        await knex('lpm').where({id_stasiun: id_stasiun, tgl: tgl}).update(output);
      }
        
      
      
      
      

      
      

      // Example: Get second cell in each row, i.e. Column "B"
      // const secondCell = worksheet[XLSX.utils.encode_cell({r: rowNum, c: 1})];
      // NOTE: secondCell is undefined if it does not exist (i.e. if its empty)
      // console.log(rowNum, fix_tgl, p05_06, p07_08); // secondCell.v contains the value, i.e. string or number
    }

    res.send(output);

    // console.log(output);

    

  } catch (error) {
      
  }

  // console.log(desired_cell.v);
});

module.exports = router;
