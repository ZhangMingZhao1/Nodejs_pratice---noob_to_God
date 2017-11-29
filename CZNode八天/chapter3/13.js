var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine","ejs");

app.get("/",function (req,res) {
    res.render("form");
});

app.use(bodyParser.urlencoded({extended:false}));

app.post("/",function (req,res) {
    console.log(req.body);
})

app.listen(3000);