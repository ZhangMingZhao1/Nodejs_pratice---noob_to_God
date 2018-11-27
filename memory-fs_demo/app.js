var MemoryFileSystem = require("./MemoryFileSystem");
var fs = new MemoryFileSystem(); // Optionally pass a javascript object
const fs2 = require('fs');


创建 /tmp/a/apple 目录，不管 `/tmp` 和 /tmp/a 目录是否存在。 node v10的版本才有
fs2.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
    if (err) throw err;
  });


fs.mkdirpSync("/a/test/dir");
fs.writeFileSync("/a/test/dir/file2.txt", "Hello World2");
console.log(fs.readFileSync("/a/test/dir/file2.txt",'utf-8'));// returns Buffer("Hello World"))
// fs.readFileSync("/a/test/dir/file2.txt",function(err,data) {
//     console.log(data);
// })

fs2.mkdir('ass/dasdsa', { recursive: true }, (err) => {
    if (err) throw err;
  });

