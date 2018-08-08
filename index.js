require('dotenv').config()
var express = require('express')
var app = express()
var colors = require('colors')
var dotenv = require('dotenv')
var path = require('path')
var port = 3000
var serveStatic = require('serve-static')
var urls = require('./sitemap')
var sm = require('sitemap')
var sitemap = sm.createSitemap ({
  hostname: 'https://garybunofsky.com',
  cacheTime: 600000,
  urls: urls.data
})

app.set('view engine', 'ejs')
app.get('/', (req, res) => { res.render('index') })
app.get('/about', (req, res) => { res.render('about') })
app.get('/blog', (req, res) => { res.render('blog/index') })
app.get('/blog/a-month-without-coffee', (req, res) => { res.render('blog/a-month-without-coffee') })
app.get('/blog/basic-git-commands', (req, res) => { res.render('blog/basic-git-commands') })
app.get('/blog/facebooks-new-job', (req, res) => { res.render('blog/facebooks-new-job') })
app.get('/blog/finding-photos', (req, res) => { res.render('blog/finding-photos') })
app.get('/blog/free-fonts-that-arent-google-fonts', (req, res) => { res.render('blog/free-fonts-that-arent-google-fonts') })
app.get('/blog/not-the-same', (req, res) => { res.render('blog/not-the-same') })
app.get('/blog/seeding-a-database-with-knex', (req, res) => { res.render('blog/seeding-a-database-with-knex') })
app.get('/blog/website-deployment-checklist', (req, res) => { res.render('blog/website-deployment-checklist') })
app.get('/contact', (req, res) => { res.render('contact') })
app.get('/portfolio', (req, res) => { res.render('portfolio/index') })
app.get('/portfolio/insights', (req, res) => { res.render('portfolio/insights') })
app.get('/portfolio/pass', (req, res) => { res.render('portfolio/pass') })
app.get('/privacy-policy', (req, res) => { res.render('privacy-policy') })
app.get('/tools', (req, res) => { res.render('tools') })
app.get('/sitemap.xml', function(req, res) {
  res.header('Content-Type', 'application/xml')
  res.send( sitemap.toString() );
})
app.use(express.static('public'))
app.use(function(req, res, next) {
    res.status(404)
    res.render('404')
})
app.listen(process.env.PORT || port)
console.log(colors.cyan('Server started on port ' + process.env.PORT || port))
