var MemoryFileSystem = require("./MemoryFileSystem");
var fs = new MemoryFileSystem(); // Optionally pass a javascript object
 
fs.mkdirpSync("/a/test/dir");
fs.writeFileSync("/a/test/dir/file2.txt", "Hello World2");
console.log(fs.readFileSync("/a/test/dir/file2.txt",'utf-8'));// returns Buffer("Hello World")) 
// fs.readFileSync("/a/test/dir/file.txt",function(err,data) {
//     console.log(data);
// })

