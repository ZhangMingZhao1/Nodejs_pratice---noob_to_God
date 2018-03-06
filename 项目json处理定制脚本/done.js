var fs = require('fs'),
    path = require('path');

fs.readFile(path.join(__dirname, 'json/json1.json'), 'utf8',function (err,data) {
    if (err) throw err;
    console.log(data);
    // JSON.parse和JSON.stringify()
    const copy = JSON.parse(data, (key, value) => {
        return value && value.type === 'Buffer' ?
            Buffer.from(value.data) :
            value;
})
// 输出: <Buffer 01 02 03 04 05>
    console.log(copy);
});