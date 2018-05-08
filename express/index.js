var express = require('express');
var app = express();
var fs = require('fs');
// 设置模板路径，默认为./views
// app.set('views', path.join('views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

function sss (req, res, next) {
    var referer = req.headers.referer;
    console.log(referer);
    // console.log(referer.indexOf('localhost3'));
    if (referer && referer.indexOf('localhost1') >= 0) {
        next();
    } else {
        // console.log(res);
        console.log(1);
        // res.state(500).send('盗链图片来自:<a href="xxxxx"></a>');
        res.send('盗链图片来自:<a href="xxxxx"></a>');
        return false;
    }
}

app.get('/public/*',
    sss,
    function (req,res,next) {
    console.log(234234);
        try {
            fs.readFile("./views/a.jpg", function (err, data) {
                res.writeHead(200, {"Content-type": "image/jpg"});
                console.log(err);
                // console.log(data);
                res.end(data);
            });
        }catch (err) {
            console.log(err);
        }
});
app.get('/', function(req, res) {
    console.log(10);
    res.render('index', { helloWorld: 'hello,world' });
});

app.listen(3000, function() {
    console.log('app listen at 3000');
});