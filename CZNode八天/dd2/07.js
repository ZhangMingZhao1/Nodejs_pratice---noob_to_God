var http = require("http");
var querystring = require("querystring");

//创建服务器创建服务器
var server = http.createServer(function (req, res) {
    if(req.url == "/dopost" && req.method.toLowerCase() == "post") {
        var alldata = "";
        //下面是post请求接受的一个公式
        //node为了追求极致，他是一个小段一个小段接受的。
        //接受了一小段，可能就给别人服务了。防止一个过大的表单阻塞了整个进程
        req.addListener("data", function (chunk) {
            alldata += chunk;
        });

        req.addListener("end", function () {
            var datastring = alldata.toString();
            res.end("success");
            // console.log(alldata);
            // console.log(datastring);
            //讲datastring转为一个对象
            var dataObj = querystring.parse(datastring);
            console.log(dataObj);
            console.log(dataObj.name);
            console.log(dataObj.sex);
            console.log(dataObj.hobby);

        });
    }
});

server.listen(3000,"127.0.0.1");
