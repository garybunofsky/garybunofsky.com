var express = require("express");
var jade = require("jade");

var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.get("/", function(req, res) {
  res.render("index", {
    title: "Gary Bunofsky › Developer"
  });
});
app.get("/about", function(req, res) {
  res.render("about", {
    title: "About › Gary Bunofsky"
  });
});
app.get("/writing", function(req, res) {
  res.render("writing", {
    title: "Writing › Gary Bunofsky"
  });
});
app.use(express.static("static"));
app.listen(3000);
