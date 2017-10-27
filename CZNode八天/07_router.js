var http = require("http");

var server = http.createServer(function (req, res) {
     var userurl = req.url;

     res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"})
     //substr函数来判断此时的开头

     if(userurl.substr(0,9) == "/student/") {
         var studentid = userurl.substr(9);
        //  console.log(studentid);
        //注意正则表达式只是匹配母串中有没有子串满足，所以这里要加开始^和结束$符号
         if(/^\d{10}$/.test(studentid)) {
             res.end("您要查询的学生信息，id为" + studentid);
         }else {
             res.end("学生学号位数不对");
         }
     }else if(userurl.substr(0,9) == "/teacher/") {
         var teacherid = userurl.substr(9);
         if(/^\d{6}$/.test(teacherid)) {
             res.end("您要查询老师信息，id为" + teacherid);
         }else {
             res.end("老师学号位数不对");
         }
     }else {
         res.end("都不正确");
     }
}).listen(3000,"127.0.0.1");
