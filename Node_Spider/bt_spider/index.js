const cheerio = require('cheerio');
const http = require('http');
const iconv = require('iconv-lite');

let baseUrl = "http://www.ygdy8.net/html/gndy/dyzz/list_23_";
let Host = "http://www.ygdy8.net/";
let titleHref = [];
const totalPage = 1; //指定爬多少页数据
let res = [];
//获取页面电影数据
function getTitleHref(url,page) {
  let startUrl = url+page+".html";
  http.get(startUrl,function(res) {
    let chunks = [];

    res.on('data',function(chunk){
      chunks.push(chunk);
    });
    res.on('end',function(){
      let title = [];
      let html = iconv.decode(Buffer.concat(chunks),'gb2312');
      let $ = cheerio.load(html, {decodeEntities: false});
      // console.log($);
      $('.co_content8 .ulink').each(function(i,d) {
        let $d = $(d);
        titleHref.push({
          href: $d.attr('href')
        });
      });
      console.log(titleHref);
    });
    if(page <= totalPage) {
      getTitleHref(url,++page);
    }else {
      console.log(page);
      getLink(titleHref);
    }
   
  });
}

//获取种子链接
function getLink(titleHref) {
  console.log('进入getLink');

  titleHref.forEach(function(v,k) {
    console.log('~~~~~~~~~~~~~~~~~~~~');
    let infoUrl = Host + v.href;
    console.log(infoUrl);
    // try {
      http.get(infoUrl,function(res) {
        console.log('进入getlink http');
        
        let chunks = [];
        res.on('data',function(chunk) {
          chunks.push(chunk);
        });
        res.on('end', function(){
          let html = iconv.decode(Buffer.concat(chunks),'gb2312');
          let $ = cheerio.load(html, {decodeEntities: false});
          
          
          let reg = /.*译　　名/;
          let info = '';
          let bt = '';
          let textInfo = $('.co_content8 #Zoom p').eq(0).text();
          info = textInfo.match(reg)[0];
          bt = $('#Zoom td').children('a').attr('href');
          res.push({
            Info:info,
            Bt:bt
          });
          console.log(res);
        })
        //怎么捕获错误！！！
        res.on('error',function(){
          console.log('error');
        })
      })
  // }catch(e) {
  //   console.log(e);
  // }
  });
};

getTitleHref(baseUrl,1)

