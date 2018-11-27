
//zmz 2018.11.27 add copyDir Function
//使用memory-fs  参考 https://github.com/leinov/fuzhi/blob/master/bin/fuzhi
copyDir(from, to) {
    if(!this.existsSync(to)) {
        this.mkdirSync(to);
    }
    const paths = this.readdirSync(from);
    console.log(paths);
    paths.forEach((path)=>{
        var src = `${from}/${path}`;
        var dist = `${to}/${path}`;
        const res = this.statSync(src);
        if(res.isFile()) {
            this.writeFileSync(dist, this.readFileSync(src));
            // console.log(chalk.magenta(`🏇 copy ${src} `));
        } else if(res.isDirectory()) {
            this.copyDir(src, dist);
        }
    });
}
