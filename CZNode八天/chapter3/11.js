
var express = require("express");
var fs = require("fs");

var app = express();
//越详细的越往前写
//use就是getpost，只不过可以把路径拓展开
app.use("/jingtai",express.static("./public"));

//新的路由
app.get("/images",function (req,res) {
    res.send("哈哈");
});

//会自动识别err参数,如果有,那么就这个函数能捕获err
app.use(function (req,res) {
        res.send("没有这个页面");
});

app.listen(3000);

