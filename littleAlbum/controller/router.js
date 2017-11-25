var file = require("../models/file.js");
var formidable = require("formidable");
var path = require("path");
var fs = require("fs");
var sd = require("silly-datetime");
exports.showIndex = function (req,res,next) {
    //错误的，传统的思维，不是Node的思维。
    // res.render("index",{
    //     //注意这里异步的,遇到阻塞，会直接呈递模版引擎,所以这种写法是错误的，小函数会没执行完，就呈递了
    //     "albums" : file.getAllAlbums()
    // });
    //这就是Node.js的编程思维，就是所有的东西，都是异步的
    //所以，内层函数，不是return回来东西,而是调用高层函数提供的
    //回调函数。把数据当做回调函数的参数来使用。
    file.getAllAlbums(function (err,allAlbums) { //这个function就是callback
        //err是字符串
        if(err) {
            next();
            return;
        }
        res.render("index",{
            "albums" : allAlbums
        });
    })
};

//相册页
exports.showAlbum = function (req,res,next) {
    //遍历相册中的所有图片
    var albumName = req.params.albumName;
    //具体业务交给model
    file.getAllImagesByAlbumName(albumName,function (err,imagesArray) {
        if(err) {
            next();
            return;
        }
        res.render("album",{
            "albumname" : albumName,
            "images" : imagesArray
        });
    });
    
};

exports.showUp = function (req,res) {
    //命令file模块（我们自己写的函数）调用getAllAlbums函数
    //得到所有文件夹名字之后做的事情，写在回调函数里面
    file.getAllAlbums(function (err,albums) {
        res.render("up",{
            albums : albums
        });
    })
}

//上传表单
exports.doPost = function (req,res) {
    var form = new formidable.IncomingForm();

        // "../"返回上一级
    form.uploadDir = path.normalize(__dirname + "/../tempup/");
    form.parse(req, function (err, fields, files,next) {
        console.log(fields);
        console.log(files);
        //改名
        if(err) {
            next(); //这个中间件不受理这个请求了，往下走
            return;
        };

        //判断文件尺寸
        var size = parseInt(files.tupian.size);
        if(size > 2000000) {
             res.send("图片尺寸应该小于2M");

            //则删除这个文件
            fs.unlink("files.tupian.path",function () {

            });
            return;
        }
        var wenjianjia = fields.wenjianjia;
        var oldpath = files.tupian.path ;
        //还是加时间戳
        var ttt = sd.format(new Date(), "YYYMMDDHHmmss");
        var ran = parseInt(Math.random() * 89999 + 10000);
        var extname = path.extname(files.tupian.name);
        var newpath = path.normalize(__dirname + "/../uploads/" + wenjianjia + "/" + ttt + ran + extname);
        fs.rename(oldpath,newpath,function (err) {
            if(err) {
                res.send("改名失败");
                return;
            }
            res.send("成功");
        });
    });


}