var express = require('express')
var app = express()
var path = require('path')
var serveStatic = require('serve-static')
app.use(
  serveStatic(path.join(__dirname, 'src'))
)

app.listen(3000)
console.log('Server started on port 3000')
