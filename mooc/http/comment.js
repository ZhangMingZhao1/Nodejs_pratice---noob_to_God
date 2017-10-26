var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    'content': '11111111',
    'cid': 348
})

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=36f27b86-5343-4ee7-a690-70d9587d6852; imooc_isnew_ct=1496158879; Hm_lvt_cd72d371d27db21df006381c249f3b30=1498312583; UM_distinctid=15dc1a9baf96c-00231815edc6a5-333f5902-144000-15dc1a9bafa59b; CNZZDATA1261110065=153479569-1502191468-null%7C1502191468; loginstate=1; apsid=ZiNzRjNGIyNDhjNzk4Mzg5MGU1OGU4Yjg2ZGY5NWMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTM3NzkzNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMTA0MjcyMzE5QHFxLmNvbQAAAAAAAAAAAAAAAAAAADk1NjJkMWNmMjc5MjgwZDE0ZjQ0MTQzMTlmOTgwNTYywc3EWcHNxFk%3DND; last_login_username=1104272319%40qq.com; PHPSESSID=62r78t2cg07luemstdkdgmaie4; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1506227828,1506243943,1506245109,1506312444; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1506312538; imooc_isnew=2; cvde=59c88165ce81d-30',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/comment/348',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

var req = http.request(options, function(res) {
    console.log('Status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));

    res.on('data', function(chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    })

    res.on('end', function() {
        console.log('评论完毕！');
    })

})
    req.on('error', function(e) {
        console.log('Error: ' + e.message);
})
    req.write(postData)
    req.end();
