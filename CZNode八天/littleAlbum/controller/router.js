var file = require("../models/file.js");

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


}