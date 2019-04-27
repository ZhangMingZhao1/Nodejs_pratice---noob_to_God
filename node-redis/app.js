var redis = require("redis");

/**以下参数分别填写您的Redis实例内网IP，端口号，实例ID和密码*/
var host = "119.3.231.11",
port = "6379";
// instanceid = "c532952f-55dc-4c22-a941-63057e560788",
// pwd = "1234567q";
//连接Redis
var client  = redis.createClient(port, host, {detect_buffers: true});
// Redis连接错误
client.on("error", function(error) {
    console.log('err',err); 
});
//鉴权
// client.auth(instanceid + ":" + pwd);

/**接下来可以开始操作Redis实例 */
// 设置Key
// client.set("redis2", JSON.stringify({
//         "a":"a",
//         "b":"b"
//     }), function(err, reply){
//     if (err) {
//         console.log(err);  
//             return;  
//     }
//     console.log("set key redis " + reply.toString() + ", value is tencent");  
// });

//获取Key
client.get("dd", function (err, reply) {
    if (err) {
        console.log('err',err);  
        return;  
    }
    console.log("get key redis is:" + JSON.parse(reply.toString()).pojo2.status );
//程序结束关闭客户端
    client.end(true);
});