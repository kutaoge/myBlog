const express = require('express')
const app = express()
const moment = require('moment')
const fs = require('fs')
const path = require('path')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// const index = require('./router/index.js')
// app.use(index)

// const user = require('./router/user.js')
// app.use(user)

fs.readdir(path.join(__dirname, './router'), (err, filenames) => {
  if (err) return console.log('读取 router 目录中的路由失败！')
  // 循环router目录下的每一个文件名
  filenames.forEach(fname => {
    // 每循环一次，拼接出一个完整的路由模块地址
    // 然后，使用 require 导入这个路由模块
    const router = require(path.join(__dirname, './router', fname))
    app.use(router)
  })
})

// 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')
// 设置模板页面的存放路径
app.set('views', './views')
// 把 node_modules 文件夹，托管为静态资源目录
app.use('/node_modules', express.static('./node_modules'))



app.listen(3000, () => {
  console.log("服务器运行成功……")
})