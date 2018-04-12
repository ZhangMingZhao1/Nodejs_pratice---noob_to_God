var express = require('express');
var app = express();
var fs = require('fs');
// 设置模板路径，默认为./views
// app.set('views', path.join('views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/public/*',
    function (req, res, next) {
        var referer = req.headers.referer;
        console.log(referer);
        if (referer && referer.indexOf('localhost1') <= 0) {
            try {
                fs.readFile("./views/no.png", function (err, data) {
                    console.log("no");
                    res.writeHead(200, {"Content-type": "image/jpg"});
                    console.log(err);
                    // console.log(data);
                    res.end(data);
                });
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                fs.readFile("./views/a.jpg", function (err, data) {
                    console.log("normal");
                    res.writeHead(200, {"Content-type": "image/jpg"});
                    // console.log(data);
                    res.end(data);
                });
            } catch (err) {
                console.log(err);
            }
        }
    });
app.get('/', function (req, res) {
    res.render('index', {helloWorld: 'hello,world'});
});

app.listen(3000, function () {
    console.log('app listen at 3000');
});