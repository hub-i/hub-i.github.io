var b=20,c=30;
var obj = {
  "a":10, // ""붙여야 맞지만 생략해도 상관없다.
  //b:b,  //앞의 b는 "b" 프로퍼티의 b, 뒤의 b는 20을 지닌 변수 b
  b,      // b:b 같은 의미
  //speak1: function xxx(){ //speak:function()써도 상관없다.
    speak1() {
    console.log('SPEAK!');
  },c
};

console.log(obj);
obj.speak1();

const o = {
 name: 'Wallace',
 speak() {
   return `My name is ${this.name}!`;
 },
}
console.log(o.speak());

const speak = o.speak;
speak === o.speak; // true; both variables refer to the same function
console.log(speak());
