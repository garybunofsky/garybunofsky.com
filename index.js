var express = require('express')
var app = express()
var path = require('path')
var serveStatic = require('serve-static')
var port = 3000
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index')
})
app.use(express.static('public'))
app.listen(process.env.PORT || port)
console.log('Server started on port ' + process.env.PORT || port)
