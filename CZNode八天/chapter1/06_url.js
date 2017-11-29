var http = require("http");
var url = require("url");
var querystring = require("querystring");

 http.createServer(function(req, res) {
     var queryObj = url.parse(req.url,true).query;//加true的就是
     var name = queryObj.name;
     var age = queryObj.age;
     var sex = queryObj.sex;

     res.end("服务器收到了请求" + name + age + sex);
 }).listen(3000,"127.0.0.1");
