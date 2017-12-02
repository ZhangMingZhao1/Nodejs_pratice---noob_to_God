var formidable = require("formidable");
var db = require("../models/db.js");
var md5 = require("../models/md5.js");
//显示主页
exports.showIndex = function (req,res,next) {
    res.render("index",{
        "login" : req.session.login == "1" ? true : false,
        "username" : req.session.login == "1" ? req.session.username : ""
    });
};
//注册页面
exports.showRegist = function (req,res,next) {
    res.render("regist");
};

exports.showdoRegist = function (req,res,next) {
    //得到用户填写的东西
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        //得到表单之后做的事情
        var username = fields.username;
        var password = fields.password;
        console.log(username + " " + password);
        //查询数据库中是不是有这个人
        db.find("users",{"username":username},function (err,result) {
            if(err) {
                //服务器错误
                res.send("-3");
                return ;
            }
            if(result.length != 0) {
                res.send("-1"); //被占用
                return;
            }
            // console.log(result.length);
            //设置md5加密
            password = md5(password) + "lawliet";
            //现在可以证明，用户名没有被占用
            db.insertOne("users",{
                "username" : username,
                "password" : password
            },function (err,result) {

                console.log(result);
                if(err) {
                    res.send("-3"); //服务器错误
                    console.log("错误");
                    return;
                }

                req.session.login = "1";
                req.session.username = username;

                res.send("1");//注册成功，写入session

            })
        });

        //保存这个人

    });
}

exports.showLogin = function (req,res,next) {
    res.render("login");
}

exports.showdologin = function (req,res,next) {
    //得到用户表单
    //查询数据库,看看有没有这个人
    //有的话，进一步看看这个人的密码是否匹配
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        //得到表单之后做的事情
        var username = fields.username;
        var password = fields.password;
        var mdpassword = md5(password) + "lawliet";

        console.log(username + " " + password);
        //查询数据库中是不是有这个人
        db.find("users",{"username":username},function (err,result) {
            //注意这个result是个数组
            if(err) {
                res.send("-5");
                return;
            }
            //没有这个人
            if(result.length == 0 ) {
                res.send("-1");
                return ;
            }
            //有的话，进一步看看这个人的密码是否匹配
            req.session.username = username;
            req.session.login = "1";
            if( mdpassword == result[0].password ) {
                res.send("1"); //登陆成功
                return ;
            }else {
                res.send("-2"); //密码错误
                return ;
            }
        })
        });

}