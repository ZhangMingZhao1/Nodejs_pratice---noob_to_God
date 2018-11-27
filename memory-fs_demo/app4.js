const fs = require("fs");
function copyIt(from, to) {

    fs.writeFileSync(to, fs.readFileSync(from));
    //fs.createReadStream(src).pipe(fs.createWriteStream(dst));大文件复制
}

// copyIt("./public/from.txt","./public/to.txt");

//获取node执行的参数
// var arguments = process.argv.splice(2);

// console.log(process.argv);
const child_process = require('child_process');

function copyIt(from, to) {

    child_process.spawn('cp', ['-r', from, to]);
}

copyIt("from","to");
