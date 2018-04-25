var express = require('express')
var app = express()
var path = require('path')
var serveStatic = require('serve-static')

app.use(express.static(path.join(__dirname, 'src'),{index:false,extensions:['html']}))

app.listen(3000)
console.log('Server started on port 3000')
