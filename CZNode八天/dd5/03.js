//limit,skip高效率做法
var express = require("express");
var app = express();
var db = require("./model/db2.js");

app.get("/",function (req,res) {
    db.insertOne("teacher",{"name":"小红"},function (err,result) {
        if(err) {
            console.log("插入失败");
        }
        res.send("插入成功");
    });
});

app.get("/du",function (req, res) {
    //这个页面现在接受一个page参数。
    var page = parseInt(req.query.page); //express中读取get参数很简单

    //每页10个，查第三页
    // db.find("student",{},{"pageamount":5,"page":page},function (err,result) {
    // db.find("student",{},function (err,result) {

    //注意这个结果还是5条，是先find在age大于50情况的结果集里面skip和limit
        db.find("student",{"age":{$gt:50}},{"pageamount":5,"page":page},function (err,result) {
        if(err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.listen(3000);
