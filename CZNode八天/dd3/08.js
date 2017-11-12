var http = require("http");
var express = require("express");


var app = express();

app.get("/",function (req, res,next) {
    console.log("1");
    next();
});

app.get("/",function (req,res) {
    console.log("2");
});

app.listen(3000,"127.0.0.1");
