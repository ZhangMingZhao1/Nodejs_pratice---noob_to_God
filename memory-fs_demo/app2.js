var MemoryFileSystem = require("./MemoryFileSystem");
var fs = new MemoryFileSystem(); // Optionally pass a javascript object

console.log(fs.readFileSync("/a/test/dir/file2.txt",'utf-8'));// returns Buffer("Hello World")) 