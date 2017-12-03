var express = require("express");
var app = express();
var router = require("./router/router.js");

var session = require("express-session");
//模版引擎
app.set("view engine","ejs");

// 使用session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))



//静态页面
app.use(express.static("./public"));
app.use("/avatar",express.static("./avatar"));

//路由表
app.get("/",router.showIndex);
app.get("/regist",router.showRegist);
app.get("/login",router.showLogin);
app.post("/doregist",router.showdoRegist);
app.post("/dologin",router.showdologin);
app.get("/setAvatar",router.showSetAvatar);
app.post("/doSetAvatar",router.showdoSetAvatar);
app.get("/cut",router.showCut);
app.get("/docut",router.docut);

app.listen(3000);