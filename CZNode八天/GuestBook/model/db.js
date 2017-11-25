//这个模块里面封装了所有对数据库的常用操作

var MongoClient = require('mongodb').MongoClient;

//不管数据库什么操作，都是先连接数据库，所以我们可以把连接数据库
//封装成为函数

function _connectDB(callback) {
    var url = "MongoDB://127.0.0.1/haha";
    MongoClient.connect(url, function (err,db) {
        if(err) {
            callback(err,null);
            return;
        }
        callback(err,db);
    });
}

exports.insertOne = function (collectionName, json, callback) {
    _connectDB(function (err,db) {
            if(err) {
                callback(err,null);
                return;
            }
            db.collection(collectionName).insertOne(json, function (err, result) {
                callback(err, result);
                db.close();//关闭数据库
            })
        });
}

exports.find = function (collectionName,json,callback) {
    var result = [];   //结果数组
    if(arguments.length != 3) {
        callback("find函数接受三个参数",null);
        return ;
    }
    //链接数据库，链接之后查找所有
    _connectDB(function (err,db) {
        var cursor = db.collection(collectionName).find(json);
        cursor.each(function (err, doc) {
            if(err) {
                callback(err,null);
                return;
            }
           if(doc != null) {
               result.push(doc); //放入结果数组
           }else {
               //遍历结束，没有更多的文档
                callback(null,result);
           }
        });
    });
}