var express = require("express");

var app = express();

app.use(express.static("./public"));

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

app.get("/news",function (req,res) {
    //相当于send的时候发的是json数据
    res.json(shujuku);
});

app.listen(3000);