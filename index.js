var express = require('express')
var app = express()
var serveStatic = require('serve-static')
var port = process.env.PORT || 3000
var path = require('path')
app.use(serveStatic(path.join(__dirname, 'dist')))

app.listen(port)
console.log('Server started on port ' + port)
