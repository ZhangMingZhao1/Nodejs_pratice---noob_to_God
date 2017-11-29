var express = require("express");
var ejs = require("ejs");

var app = express();


var shujuku = [
    {
        "biaoti":"我是1号新闻啊！我很开心啊",
        "shijian":"2017年11月14日09:21:03",
        "zuozhe":"考拉",
        "neirong":"<p>内容啊内容啊内容啊内容啊</p>"
    },
    {
        "biaoti":"我是2号新闻啊！我很开心啊",
        "shijian":"2017年11月14日09:21:03",
        "zuozhe":"Bob",
        "neirong":"内容啊内容啊内容啊内容啊"
    },
    {
        "biaoti":"我是3号新闻啊！我很开心啊",
        "shijian":"2017年11月14日09:21:03",
        "zuozhe":"Jack",
        "neirong":"内容啊内容啊内容啊内容啊"
    },
    {
        "biaoti":"我是4号新闻啊！我很开心啊",
        "shijian":"2017年11月14日09:21:03",
        "zuozhe":"hehe",
        "neirong":"内容啊内容啊内容啊内容啊"
    }
    ];

app.set("views engine", "ejs");
app.get("/news/:id", function (req,res) {
    //新闻id
    var id = parseInt(req.params.id);

    res.render("content",shujuku[id-1]);
});


app.listen(3000);