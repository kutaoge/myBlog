const express = require('express')
const router = express.Router()

var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blogdata'
});

router.get('/', (req, res) => {
  res.render('index', {})
})

module.exports = router