var express = require("express");
var fs = require("fs");

var app = express();


//http://localhost:3000/?id=12&name=gg
app.get("/", function (req,res) {
    console.log(req.query);
    res.send();
});

app.listen(3000);

