var express = require('express')
var app = new express()
var router = require('./router/user')

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

// 允许跨域操作，剔除了网络错误警告
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});


app.use('/users', router) // 将路由注册到/users的路径下

var port = process.env.PORT || 3000

var url = "mongodb://localhost:27017/test"
var mongoose = require('mongoose')
mongoose.connect(url, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('db connect success')
    }
})

app.listen(port)
console.log('app is listening on port: ' + port)
