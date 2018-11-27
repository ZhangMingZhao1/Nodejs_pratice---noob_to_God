var MemoryFileSystem = require("./MemoryFileSystem");
var fs = new MemoryFileSystem();
const _fs = require("fs")

function copyDir(from, to) {
    if (!fs.existsSync(to)) {
        fs.mkdirSync(to);
    }

    const paths = _fs.readdirSync(from);
    paths.forEach((path) => {
        var src = `${from}/${path}`;
        var dist = `${to}/${path}`;
        const res = _fs.statSync(src);
        // _fs.stat(src, function (err, stat) {
        if (res.isFile()) {
            fs.writeFileSync(dist, _fs.readFileSync(src));
            // console.log(chalk.magenta(`🏇 copy ${src} `));
        } else if (res.isDirectory()) {
            copyDir(src, dist);
        }
        // })

    });
}

//
copyDir("from","/to");
console.log(fs.readFileSync("/to/file2.txt",'utf-8'));
console.log(fs.readFileSync("/to/from2/file1.txt",'utf-8'));




