var express = require("express");
var app = express();

//自动在views文件夹寻找
app.set("view engine", "ejs");

app.get("/", function (req,res) {
    res.render("haha",{
        "news":["我是小新闻","哈哈","嘟嘟嘟"]
    });
})
app.listen(3000);