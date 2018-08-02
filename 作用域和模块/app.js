let a;
this.a = 10;
console.log(a);
console.log(this.a);

let foo;

this.foo = function foo2(){
  let b = 10;
}
this.foo();
console.log(module.exports);

