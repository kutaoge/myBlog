const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')
// 设置模板页面的存放路径
app.set('views', './views')
// 把 node_modules 文件夹，托管为静态资源目录
app.use('/node_modules', express.static('./node_modules'))

// 注册
app.get('/register', (req, res) => {
  res.render('./user/register.ejs', {})
})

// 登录
app.get('/login', (req, res) => {
  res.render('./user/login.ejs', {})
})


app.post('/register', (req, res) => {

  /**
   * 1. 接受前端发送的 post 请求信息
   * 2. 对前端发送的 参数进行解析
   * 3. 对参数进行校验，合法性、是否重复
   * 4. 往数据库添加用户名，
   */

  console.log(req.body)

  res.send({ status: '200', msg: 'ok' })
})


app.get('/', (req, res) => {
  res.render('index', {})
})


app.listen(3000, () => {
  console.log("服务器运行成功……")
})