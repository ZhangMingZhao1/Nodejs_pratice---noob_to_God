var http = require("http");

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-type":"text/html;charset=UTF-8"});
    res.end("哈哈哈，这是我的第一个Node页面,我买了iPhone" + (1+2+3) + "s");
});

server.listen(3000,"127.0.0.1");
