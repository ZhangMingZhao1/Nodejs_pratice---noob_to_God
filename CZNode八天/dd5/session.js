var express = require("express");
var session = require('express-session');
var app = express()
// app.set('trust proxy', 1) // trust first proxy

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.get("/",function (req,res) {
    if(req.session.login) {
        res.send("欢迎你" + req.session.username);
    }else {
        res.send("你没有登陆");
    }
});

app.get("/login",function (req,res) {
    req.session.login = true; //设置这个session
    req.session.username = "Jack";
    res.send("你已经成功登陆");
});

app.listen(3000);