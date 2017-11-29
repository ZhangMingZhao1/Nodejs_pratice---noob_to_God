var http = require("http");
var express = require("express");


var app = express();

//会根据顺序来捕捉
app.get("/:username/:id",function (req,res) {
    var username = req.params.username;
    //检索数据库
    if(username) {
        console.log("1");
        res.send("用户信息");
    }
    else {
        next();
    }

});

app.get("/admin/login",function (req, res) {
    console.log("2");
    res.send("管理员登陆");
});

app.get("",function (req, res) {

})

app.listen(3000,"127.0.0.1");
