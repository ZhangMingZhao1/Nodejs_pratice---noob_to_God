var MemoryFileSystem = require("./MemoryFileSystem");
var fs = new MemoryFileSystem(); // Optionally pass a javascript object
//
//
fs.mkdirpSync("/from");
fs.mkdirpSync("/from/from2");
fs.writeFileSync("/from/file2.txt", "这里是from的文件");
fs.writeFileSync("/from/from2/file1.txt", "这里是from/from2的文件");
console.log(fs.readFileSync("/from/file2.txt",'utf-8'));// returns Buffer("Hello World"))
console.log(fs.readFileSync("/from/from2/file1.txt",'utf-8'));// returns Buffer("Hello World"))

// fs.readFileSync("/a/test/dir/file2.txt",function(err,data) {
//     console.log(data);
// })
// fs.readdirSync("/from",function (err,paths) {
//     console.log(paths);
// });
// console.log(fs.readdirSync("/from"));
// function cpdir(from,to) {
//     if()
// }
/**
 * is exists
 *
 * @param  {String} file
 * @return {Promise}
 */

// const fs = require("fs");
// const chalk = require("chalk");


// function isExist(path){
//     return new Promise((resolve,reject)=>{
//         try {
//             fs.existsSync(path);
//         }catch(err) {
//             reject(`${path} does not exist`);
//         };
//         resolve(true);
//     });
// }


function copyDir(from, to) {
    if(!fs.existsSync(to)) {
        fs.mkdirSync(to);
    }
    const paths = fs.readdirSync(from);
    console.log(paths);
    paths.forEach((path)=>{
        var src = `${from}/${path}`;
        var dist = `${to}/${path}`;
        const res = fs.statSync(src);
        if(res.isFile()) {
            fs.writeFileSync(dist, fs.readFileSync(src));
            // console.log(chalk.magenta(`🏇 copy ${src} `));
        } else if(res.isDirectory()) {
            copyDir(src, dist);
        }

    });

}

copyDir("/from","/to");
console.log(fs.readFileSync("/to/file2.txt",'utf-8'));// returns Buffer("Hello World"))
console.log(fs.readFileSync("/to/from2/file1.txt",'utf-8'));
