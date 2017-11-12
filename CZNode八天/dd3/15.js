var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");

var app = express();

app.get("/",function (req,res) {
    console.log(req.ip);
    res.send();
    // res.render("xixi");
});

app.listen(3000);