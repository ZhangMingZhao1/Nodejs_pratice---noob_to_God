var fs = require('fs')
var path = require('path')
/**
 * 同步递归创建路径
 *
 * @param  {string} dir   处理的路径
 * @param  {function} cb  回调函数
 */

//利用path.parse 返回的dir总是去除最后一个路径的特性，dir会把目录最后一个当做文件
var $$mkdir = function(dir, cb) {
    var pathinfo = path.parse(dir);
    // console.log(fs.existsSync(pathinfo.dir));
    // console.log(pathinfo.dir);
    if (!fs.existsSync(pathinfo.dir)) {
        $$mkdir(pathinfo.dir,function() {
            fs.mkdirSync(pathinfo.dir)
        })
    }
    cb && cb()
}

$$mkdir(path.join(__dirname, 'demo/test/123/'));

