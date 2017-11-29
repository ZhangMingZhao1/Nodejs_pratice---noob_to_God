var http = require("http");
var querystring = require("querystring");
var formidable = require('formidable');
var util = require("util");
var sd = require("silly-datetime");
var fs = require("fs");
var path = require("path");

//创建服务器创建服务器
var server = http.createServer(function (req, res) {
    if(req.url == "/dopost" && req.method.toLowerCase() == "post") {
        //Create a new incoming form.
        var form = new formidable.IncomingForm();
        form.uploadDir = "./uploads";
        //执行里面的回调函数的时候，表单已经全部接收完毕了
        form.parse(req, function (err, fields, files) {
            if(err) {
                throw  err;
            }
            console.log(util.inspect({fields:fields,files:files}));
            //时间,使用了第三方模块，silly-datetime
            var ttt = sd.format(new Date(), "YYYMMDDHHmmss");
            var ran = parseInt(Math.random() * 89999 + 10000);
            var extname = path.extname(files.tupian.name);
            //执行改名
            var oldpath = __dirname + "/" + files.tupian.path;
            //新的路径由三个部分组成：时间戳，随机数，拓展名
            var newpath = __dirname + "/uploads/" + ttt + ran + extname;

            fs.rename(oldpath,newpath,function (err) {
                if(err) {
                    throw Error("改名失败")
                }
                res.writeHead(200, {"Content-type":"text/plain"});
                res.end("success");
            });
        });
    }else if(req.url == "/") {
        //呈现form.html
        fs.readFile("./form.html", function (err,data) {
            res.writeHead(200, {"content-type":"text/html"});
            res.end(data);
        })
    }else {
        res.writeHead(404,{"content-type":"text/html"});
        res.end("404");
    }
});

server.listen(3000,"127.0.0.1");
