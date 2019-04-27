const nunjucks = require("nunjucks");

nunjucks.configure('views', { autoescape: true });
// nunjucks.render('index.html', { foo: 'bar' });

console.log(11);

nunjucks.render('index.html', { 
    header:"HEADER",
    body:"BODY"
},function(err,res){
    console.log(err);
    console.log(res);
});




