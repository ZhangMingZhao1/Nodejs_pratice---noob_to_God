// var MemoryFileSystem = require("./MemoryFileSystem");
// var fs = new MemoryFileSystem(); // Optionally pass a javascript object
const fs = require("fs");
const path = require("path");

// fs.readdir("from",function (err,files) {
//     console.log(files);
// });

// _fs.readFile('from/file2.txt', function(err, data) {
//         if (err) throw err;
//         console.log(data);
//     }
// );
// _fs.writeFileSync("to/2.txt", _fs.readFileSync("from/file2.txt"));

function readFile(dir) {
    return new Promise(function(resolve,reject) {
        fs.readdir(dir,function(err,data) {
            resolve(data)
        })
    })
}

let p = readFile("from")
p.then(data=>
    {console.log(data)})
    .catch((err)=>console.log(err))
// var fs = require('fs');
// var readDir = fs.readdirSync('from');
// console.log(readDir);
