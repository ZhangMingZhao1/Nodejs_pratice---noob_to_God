var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");

var app = express();
app.set("view engine", "jade");
app.engine("jade",require("jade") .__express);

app.get("/",function (req,res) {
    res.render("xixi");
});

app.listen(3000);