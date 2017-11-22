var express = require("express");
var app = express();
var db = require("./model/db.js");

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
    var a = [];
    db.find("student",{},function (err,result) {
        //这是一种分页查询的笨方法，效率低，因为已经查询了所有数据库，然后再回调里面筛选
        for(var i = 10 * page; i < 10*(page + 1); i++ ) {
            a.push(result[i]);
        }
        res.send(a);
    });
});

app.listen(3000);
