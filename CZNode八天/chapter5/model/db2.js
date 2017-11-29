//优化后，加入skip，limit参数的写法
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

exports.find = function (collectionName,json,C,D) {
    var result = [];   //结果数组
    //JS没有函数重载，只能手动实现
    if(arguments.length == 3) {
       //如果没有传args
        //那么参数C就是callback,参数D没有传。
        var callback = C;
        var skipnumber = 0;
        //数目限制,limit(0)就是没有限制
        var limit = 0;
    }else if(arguments.length == 4) {
        var args = C;
        var callback = D;
        //应该省略的条数
        var skipnumber = args.pageamount * args.page;
        //数目限制
        var limit = args.pageamount;
    }else {
        throw new Error("find函数的参数个数，必须是3个，或者4个");
        return;
    }
    //从第零页开始
    console.log("略过了"+skipnumber+"条"+"限制在"+limit+"条");
    //链接数据库，链接之后查找所有
    _connectDB(function (err,db) {
        var cursor = db.collection(collectionName).find(json).skip(skipnumber).limit(limit);
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