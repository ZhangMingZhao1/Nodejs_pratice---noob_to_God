var express = require("express");
var app = express();
var formidable = require("formidable");
var db = require("./model/logindb.js");
var crypto = require("crypto");

app.set("view engine","ejs");

app.use(express.static("./public"));

app.get("/regist",function (req,res) {
    res.render("regist");
});

//注册，中间件，注意加next
app.post("/doregist",function (req,res,next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
       var username = fields.username;
       var password = fields.passwor1d;
    });
});

app.listen(3000);
