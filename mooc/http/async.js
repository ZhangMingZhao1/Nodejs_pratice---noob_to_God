// console.log("before FOR: " + new Date)
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(new Date);
//     }, 2000);
// }
// console.log("after FOR: " + new Date)

// function test() {
//     for (var i = 0; i < 10; i++) {
//         console.log(new Date);
//         wsleep(2000);	//睡眠2秒，然后再进行一下次for循环打印
//     }
// };
// test();
//
// function wsleep(milliSecond) {
//     var startTime = new Date().getTime();
//     while(new Date().getTime() <= milliSecond + startTime) {
//     }
// }
// function test() {
//     for (var i = 0; i < 10; i++) {
//         console.log(new Date);
//         setTimeout(function(){}, 2000);	//睡眠2秒，然后再进行一下次for循环打印
//     }
// };
// test();

// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(new Date());
//     }, 2000*(i+1));
// }
