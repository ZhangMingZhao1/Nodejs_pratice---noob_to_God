const express = require('express');

let app = express();

app.all('/*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers && req.headers.origin ? req.headers.origin : '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    //post请求之前，会发送一个options的跨域请求
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next()
    }
  })
app.post("/login",(req,res)=>{
    console.log(10);
    res.json({
        "uid": 1,
        "permissions": [
          "auth",
          "auth/testPage",
          "auth/authPage",
          "auth/authPage/edit",
          "auth/authPage/visit"
        ],
        "role": "系统管理员",
        "roleType": 1,
        "userName": "zhangsan"
      });
})

app.listen(3000, function() {
    console.log('app listen at 3000');
});