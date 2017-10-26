var http = require("http");

var url = require("url");

var server = http.createServer(function (req, res) {
    var path = url.parse(req.url).pathname;
    var query = url.parse(req.url).query;

    console.log(path);
    console.log(query);
    res.end();
})

server.listen(3000,"localhost");
