const cheerio = require('cheerio');
const http = require('http');
const iconv = require('iconv-lite');

let baseUrl = "http://www.ygdy8.net/html/gndy/dyzz/list_23_";
let Host = "http://www.ygdy8.net/";

const totalPage = 2; //指定爬多少页数据
let ans = [];
//获取页面电影数据
function getTitleHref(url,page) {
  let startUrl = url+page+".html";
  http.get(startUrl,function(res) {
    const { statusCode } = res;
    let chunks = [];
    res.on('data',function(chunk){
      chunks.push(chunk);
    });
    res.on('end',function(){
      let title = [];
      
      let html = iconv.decode(Buffer.concat(chunks),'gb2312');
      let $ = cheerio.load(html, {decodeEntities: false});
      // console.log($);
      const asArray = $('.co_content8 .ulink');
      async function runAsync(i) {
        let $d = $(asArray[i]);
        let titleHref = [];
        if($d) {
          titleHref.push({
            href: $d.attr('href')
          });
          return await getLink().then( () => runAsync(i+1))
        }
      }
      runAsync(0);
      console.log(ans);
    });  
  });
}


// /*
//获取种子链接
function getLink(titleHref) {
  console.log('进入getLink');
  console.log(titleHref);
  if(titleHref) {
    titleHref.forEach(function(v,k) {
      console.log('~~~~~~~~~~~~~~~~~~~~');
      let infoUrl = Host + v.href;
      // console.log(infoUrl);
    
        http.get(infoUrl,function(res) {
          const { statusCode } = res;
          const contentType = res.headers['content-type'];
        
          let error;
          if (statusCode !== 200) {
            error = new Error('请求失败。\n' +
                             `状态码: ${statusCode}`);
          } 
          if (error) {
            console.error(error.message);
            // 消耗响应数据以释放内存
            res.resume();
            return;
          }
          console.log('进入getlink http');
          let chunks = [];
          res.on('data',function(chunk) {  
            chunks.push(chunk);
          });
          res.on('end', function(){
            try {
              let html = iconv.decode(Buffer.concat(chunks),'gb2312');
              let $ = cheerio.load(html, {decodeEntities: false});
              let bt = '';
              bt = $('#Zoom td').children('a').attr('href');
              // console.log(bt);
              // console.log(typeof bt)
              ans.push(bt);
              // cb(ans);
            }catch (e) {
              console.error('bt',e.message);
            }
          })
        }).on('error', (e) => {
          console.error(`错误: ${e.message}`);
        });
    });
  }
};
// */
for(let i = 1; i <= totalPage; i++) {
  getTitleHref(baseUrl,i);
  console.log(ans);
};



