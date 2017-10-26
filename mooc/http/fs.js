const fs=require('fs');

fs.readFile('user.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        //data文件中的数据
        console.log(data);
    }
});

var info="hello world";

fs.writeFile('user1.txt',info,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("OK");
    }
});
