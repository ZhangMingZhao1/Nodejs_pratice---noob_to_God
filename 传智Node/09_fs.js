var http = require("http");

var fs = require("fs");

http.createServer(function(req, res) {
    if(req.url == "favicon") {
        return ;
    }
    var ddir = [];
    //stat检测状态
    fs.readdir("./album", function(err, files) {
        //files是一个文件名的数组，并不是文件的数组，表示./album这个文件夹中的所有集合
        //包括文件，文件夹
        for(var i = 0; i < files.length; i++) {
            var thefilename = files[i];
            //又要进行一次检测
            fs.stat("./album" + thefilename, function(err,stats) {
                //如果他是一个文件夹，那么输出它：
                if(stats.isDirectory()) {
                    ddir.push(thefilename);
                }
                console.log(ddir);
            });
        }
    })
}).listen(3000,"127.0.0.1");
