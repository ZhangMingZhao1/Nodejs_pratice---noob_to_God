var http = require("http");
var querystring = require("querystring");
var formidable = require('formidable');

//创建服务器创建服务器
var server = http.createServer(function (req, res) {
    if(req.url == "/dopost" && req.method.toLowerCase() == "post") {
        //Create a new incoming form.
        var form = new formidable.IncomingForm();
        form.uploadDir = "./uploads";
        //执行里面的回调函数的时候，表单已经全部接收完毕了
        form.parse(req, function (err, fields, files) {
            console.log(fields);
            console.log(files);
            //所有的文本域，单选框，都在fields存放
            //所有的文件域，files
            res.writeHead(200, {'content-type': 'text/plain'});

            res.end("成功");
        });

    }
});

server.listen(3000,"127.0.0.1");
