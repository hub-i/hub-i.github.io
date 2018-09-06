/*

*/
function Foo(){

}
console.log(Foo.__proto__===Function.prototype);
var f1 = new Foo();
console.log(f1)

console.log(Object.__proto__===Function.prototype);
console.log(Function.prototype);
console.log(Foo.prototype);

Function.prototype.say = function(){
  console.log("Hi World!");
};

function Say(){
  console.log("HaHa World!");
}
Foo.say();
Object.say();

Say();
