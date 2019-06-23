const express = require('express')

const router = express.Router()

var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blogdata'
});

const modules = require('../controller/user.js')

// 注册
router.get('/register', modules.register)

// 登录
router.get('/login', modules.login)

// 注册接口
router.post('/register', modules.regHandle)

// 登录接口
router.post('/login', modules.loginHandle)

module.exports = router