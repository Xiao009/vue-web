// var users = [
//     { name: 'admin', pass: '123' },
//     { name: 'user', pass: '321' }
// ]

// router.route('/validate').post((req, res) => {
//     var user = users.find((item) => {
//         return item.name == req.body.name && item.pass == req.body.pass
//     })
//     res.json(user ? user : {})
// })

var express = require('express')
var router = express.Router()

var User = require('../models/user')

router.route('/validate').post((req, res) => {
    User.findOne({name: req.body.name, pass: req.body.pass}, (err, user) => {
        if (err) {
            console.log(err)
        }
        res.json(user)
    })
})

module.exports = router
