var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    if(req.url == "/") {
        res.writeHead(300, {"Content-Type": "text/html;charset = UTF8"})
        res.write("<u1>");
        res.write("<li>哈哈</li>");
        res.write("<li>哈哈</li>");
        res.write("<li>哈哈</li>");
        res.write("<li>哈哈</li>");
        res.write("<li>哈哈</li>");
        res.write("<li>哈哈</li>");
        res.write("</u1>");

        res.end("成功！");
    }
    else {
        res.writeHead(404, {"Content-Type": "text/html;charset = UTF8"});
        res.end("失败");
    }
});


server.listen(80,"127.0.0.1");

