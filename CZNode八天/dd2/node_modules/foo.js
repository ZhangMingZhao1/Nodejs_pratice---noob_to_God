var msg = "nihao";
var info = "hehe";

function showInfo() {
    console.log(info);
    return 1;
}

exports.msg = msg;
exports.info = info;
exports.showInfo = showInfo;