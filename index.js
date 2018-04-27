var express = require('express')
var app = express()
var path = require('path')
var serveStatic = require('serve-static')
var port = 3000
app.use(
  (req, res, next) => {
    const test = /\?[^]*\//.test(req.url)
    if (req.url.substr(-1) === '/' && req.url.length > 1 && !test && !req.url.includes('blog')) {
      res.redirect(301, req.url.slice(0, -1))
    }
    else {
      next();
    }
  },
  express.static(__dirname + '/src/', {extensions: ['html']})
);

app.listen(process.env.PORT)
console.log('Server started on port ' + process.env.PORT)
