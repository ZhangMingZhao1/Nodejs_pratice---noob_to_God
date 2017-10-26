var http = require("http");
var fs = require("fs");
var cheerio = require("cheerio");
var request = require("request");

var i = 0;
var url = "http://jwc.csuft.edu.cn/gzdt_2556/";

function spiderPage(x) {
    startRequest(x);
}

function startRequest(x) {
    //采用http模块向服务器发起一次get请求
    http.get(x,function(res) {
        var html = ""; //用来存储请求网页的整个html内容
        var titles = [];
        res.setEncoding("utf-8");//防乱码啊

        //监听data事件，每次取一块数据
        res.on("data",function(chunk) {
            html += chunk;
        });

        //监听end事件，当获取完整个网页的html，执行回调函数，同步-》异步->回调
        res.on("end",function() {
            var $ = cheerio.load(html);

            var time = $(".caption span:first-child");

            var news_item = {
                //获取文章的标题
                title: $('div.caption h3').text().trim(),
                //获取文章发布的时间
                Time: time,
                //获取当前文章的url
                link："http://jwc.csuft.edu.cn/gzdt_2556/" + $(".rt detail ul li a").attr('href'),
                //判断获取了多少篇文章
                i: i = i + 1,
            };
            console.log(news_item); //打印新闻信息
            var news_title = news_item.title; //存储每篇文章的内容及文章标题
            // saveImg($,news_title); //存储每篇文章的图片及图片标题

            var nextLink = "http://jwc.csuft.edu.cn/gzdt_2556/" + $("li.next a").attr("href");
            // str = encodeURI(str1[0])
            if(i <= 20) {
                spiderPage(nextLink);
            }
        });
    }).on('error',function(err) {
        console.log(err);
    })
}

    // function saveContent($,news_title) {
    //     $('.rt detail li').each(function(index,item) {
    //         var x = $(this).text();
    //         var y = x.substring(0, 2).trim();
    //
    //         if(y=='') {
    //             x = x + '\n'
    //             //将新闻文本内容一段一段添加到/data文件夹下，并用新闻的标题来命名文件
    //             fs.appendFile('./data' + news_title + '.txt', x, 'utf-8', function(err) {
    //                 if(err) {
    //                     console.log(err);
    //                 }
    //             });
    //         }
    //     })
    // }

//该函数的作用：在本地存储所爬取到的图片资源
// function saveImg($,news_title) {
//     $('.TRS_Editor img').each(function (index, item) {
//         var image_title = $('div.caption h3').text().trim();//获取图片的标题//这里写错了没？可以爬到
//         if(image_title.length>35 || image_title="") {
//             image_title = "Null";
//         }
//         var img_filename = image_title + ".jpg";
//
//         var img_src = "http://jwc.csuft.edu.cn/gzdt_2556/" + $(this).attr('src'); //获取图片的url
//
// //采用request模块，向服务器发起一次请求，获取图片资源
//     request.head(img_src,function(err,res,body) {
//         if(err) {
//             console.log(err);
//         }
//     });
//     request(img_src).pipe(fs.createWriteStream("./image" + news_title + "---" +img_filename));//通过流的方式，把图片写到本地/image目录下，并用新闻的标题和图片的标题作为图片的名称。
//     })
// }
spiderPage(url);  //主程序开始运行
