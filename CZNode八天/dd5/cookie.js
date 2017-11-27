var express = require("express");

var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());

app.get("/",function (req,res) {
    //express MaxAge是毫秒为单位。
    res.send("猜你喜欢" + req.cookies.mudidi);
});

app.get("/gonglue",function (req,res) {
    //得到get请求，用户查询的目的地
    var mudidi = req.query.mudidi;
    //记录用户喜好
    //先读取用户的喜好，然后把新的数据push进入数组，然后设置新的cookie

    var mudidiarry = req.cookies.mudidi || [];
    if(mudidiarry.indexOf(mudidi) == -1) {
        mudidiarry.push(mudidi);
    }
    //把cookie设置新的数组
    res.cookie("mudidi",mudidiarry);
    res.send(mudidi + "旅游攻略");
})
app.listen(3000);