var express = require("express");
var app = express();

//设置模版引擎
app.set("view engine", "ejs");

//刷新是get请求
app.get("/",function (req,res) {
    res.render("form");
});
//提交是Post请求
app.post("/",function (req,res) {
    //将数据添加进入数据库
    res.send("成功");
})
 
app.listen(3000);