const se = require('./se.json')

var qiniu = require('qiniu');
var fs = require('fs');

// 初始化ak,sk
qiniu.conf.ACCESS_KEY = se.accessKey;
qiniu.conf.SECRET_KEY = se.secretKey;

//要上传的空间
bucket = 'lawlietimg';


//上传到七牛后保存的文件名
key = 'my-nodejs-logo.png';
//构建上传策略函数
function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  return putPolicy.token();
}
//生成上传 Token
token = uptoken(bucket, key);
//要上传文件的本地路径
filePath = './pic.jpeg'
//构造上传函数
function uploadFile(uptoken, key, localFile) {
  var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
      if(!err) {
        // 上传成功， 处理返回值
        console.log(ret.hash, ret.key, ret.persistentId);       
      } else {
        // 上传失败， 处理返回代码
        console.log(err);
      }
  });
}
//调用uploadFile上传
uploadFile(token, key, filePath);