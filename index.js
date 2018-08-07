var express = require('express')
var app = express()
var path = require('path')
var serveStatic = require('serve-static')
var port = 3000
app.set('view engine', 'ejs')
app.get('/', (req, res) => { res.render('index') })
app.get('/about', (req, res) => { res.render('about') })
app.get('/blog', (req, res) => { res.render('blog') })
app.get('/contact', (req, res) => { res.render('contact') })
app.get('/portfolio', (req, res) => { res.render('portfolio') })
app.get('/portfolio/insights', (req, res) => { res.render('insights') })
app.get('/portfolio/pass', (req, res) => { res.render('pass') })
app.get('/tools', (req, res) => { res.render('tools') })
app.use(express.static('public'))
app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});
app.listen(process.env.PORT || port)
console.log('Server started on port ' + process.env.PORT || port)
