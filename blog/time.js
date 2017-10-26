function hello(year,month,day){
        this.year=year;
        this.month=month;
        this.day=day;
        this.say=function(){
                console.log('今天是：'+this.year+'年'+this.month+'月，'+this.day+'日；')
        }
}
var Hello = new hello('2017','9','27')
exports.add = Hello;

// function hello(name,age,money){
//         this.name=name;
//         this.age=age;
//         this.money=money;
//         this.say=function(){
//                 console.log('我的名字叫：'+this.name+'，我今年'+this.age+'岁，月薪为：'+this.money+'元；')
//         }
// }
// var Hello=new hello('jone','28','10000');
// exports.add=Hello
