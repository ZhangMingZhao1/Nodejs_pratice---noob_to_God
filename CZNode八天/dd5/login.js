var express = require("express");
var app = express();
var formidable = require("formidable");
var db = require("./model/logindb.js");

var md5 = require("./model/md5.js");


app.set("view engine","ejs");

app.use(express.static("./public"));

app.get("/regist",function (req,res,next) {
    res.render("regist");
});

app.get("/login",function (req,res,next) {
    res.render("login");
});

//注册，中间件，注意加next
app.post("/doregist",function (req,res,next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
       var username = fields.username;
       var password = fields.password;
       //加密

        password = md5(md5(password).substr(4,7) + md5(password));
       db.insertOne("users",{
           "username" : username,
           "password" : password
       },function (err,result) {
           if(err) {
               res.send("-1")
           }
           res.send("1");
       })
    });
});

app.post("/dologin",function (req,res,next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var username = fields.username;
        var password = fields.password;

        //检索数据库，按登录名检索数据库，查看密码是否匹配
        db.find("users",{"username":username},function (err,result) {
            if(result.length == 0 ) {
                res.send("-2");//-2没有这个人
                return ;
            }
            var dbpassword = result[0].password;
            var mdpassword = md5(md5(password).substr(4,7) + md5(password));
            if(dbpassword == mdpassword) {
                res.send("1");//成功
            }
            else {
                res.send("-1");
            }
        });
        
    });
});

app.listen(3000);
