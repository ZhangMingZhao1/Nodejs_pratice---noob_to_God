var express = require("express");
var app = express();

app.get("/AAb",function (req,res) {
    res.send("你好");
});

app.get("/student/:id", function (req, res) {
    var id = req.params["id"];
    var reg = /^[\d]{6}$/;
    if(reg.test(id)) {
        res.send(id);
    }else {
        res.send("请检查格式");
    }
});

app.get("/:username/:oid", function (req, res) {
    var username = req.params["username"];
    var oid = req.params["oid"];

    res.write(username+"\n");
    res.end(oid);
})

app.listen(3000);