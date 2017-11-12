var http = require("http");
var cheerio = require("cheerio");
var fs = require('fs');
var mysql = require('mysql');
var db = mysql.createConnection({
    host:     '127.0.0.1',
    user:     'root',
    password: '123456',
    database: 'spider_data'
});
db.connect();

//用于下载URL并调用的实用程序功能
//回调数据
function downloadPage(url, callback) {
    http.get(url, function(res) {
        var data = "";
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on("end", function() {
            callback(data);
        });
    }).on("error", function() {
        callback(null);
    });
}


function start() {
    var url = 'http://ac.qq.com/Comic/index/type/4/page/';
    var url2 = 'http://ac.qq.com/ComicView/index/id/626738/cid/2';

    var arr = [];
    for (var i = 1; i < 13; i++) {
        downloadPage(url + i, function(data) {
            if (data) {
                var $ = cheerio.load(data);
                $("div.ret-search-result > ul > li.ret-search-item").each(function(i, e) {
                    var json = {};
                    json.tags = [];
                    json.img = $(e).find('img').attr('data-original');
                    json.link = $(e).find('a.mod-cover-list-thumb').attr('href');
                    json.id = json.link.split('/').reverse()[0];
                    json.title = $(e).find('h3.ret-works-title > a').text();
                    json.author = $(e).find('p.ret-works-author').text();
                    json.popular = $(e).find('p.ret-works-tags> span > em').text();
                    json.description = $(e).find('p.ret-works-decs').text();
                    $(e).find('p.ret-works-tags>a').each(function(i, e) {
                        json.tags.push($(e).text());
                    });
                    downloadImg(json.img);
                    arr.push(json)
                    console.log("done");
                    // console.log(arr)
                    // fs.writeFileSync('./output.json', JSON.stringify(arr));
                    // });
                })
            }
        })
    }
}

function downloadImg(url) {
    console.log('string')
    http.get(url, function(res) {
        var imgData = "";
        res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
        res.on("data", function(chunk) {
            imgData += chunk;
        });
        res.on("end", function() {
            var d = new Date();
            fs.writeFile("./downImgs/" + Math.floor(Math.random() * 10000000) + '.jpg', imgData, "binary", function(err) {
                if (err) {
                    console.log(err);
                }
                console.log("down success");
            });
        });
    });
}
exports.start = start;
