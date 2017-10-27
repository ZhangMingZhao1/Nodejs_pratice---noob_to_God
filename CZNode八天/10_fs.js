var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
    //不处理收藏夹小图标
    if(req.url == "favicon.ico") {
        return ;
    }
    //遍历album里面的所有文件，文件夹
    fs.readdir("./album/", function(err, files) {
        //files是一个存放文件(夹)名的数组
        //files: ["aaa","bbb","1.txt","1.txt副本"]
        //存放文件夹的数组wenjianjia
        var wenjianjia = [];
        //迭代器就是强行把异步的函数，变成同步的函数
        //0做完了，做1，1做完了，再做2，再做3
        (function iterator(i) {
            //遍历结束
            if(i == files.length) {
                console.log(wenjianjia);
                return ;
            }
            fs.stat("./album/" + files[i], function(err, stats) {
                //检测成功之后做的事情
                if(stats.isDirectory()) {
                      //如果是文件夹，那么放入数组。不是，什么也不做
                      wenjianjia.push(files[i]);
                }
                //递归
                iterator(i+1);
            });
        })(0);
    });
    res.end();
})

server.listen(3000,"127.0.0.1");
