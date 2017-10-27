var http = require("http");

http.createServer(function(req, res) {
    console.log("服务器收到了请求" + req.url);
    res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"});
    res.write("<h1>我是主标题</h1>");
    res.write("<h2>我是2标题<h2>");
    res.end((1+2+3).toString());
}).listen(3000,"localhost");
