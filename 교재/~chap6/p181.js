// => : 뚱뚱한 화살표연산자 (자바는 -->를 사용 /람다식)
const f1 = function() {
  return "hello!";
}
const f1 = () => "hello!";


const f2 = function(name) {
  return `Hello, ${name}!`;
}
const f2 = name => `Hello, ${name}!`;


const f3 = function(a, b) {
  return a + b;
}
const f3 = (a, b) => a + b;


const f3 = function(a, b) {
  var sum = a+b
  return sum;
}
const f3 = (a,b) =>{
  var sum = a+b
  return sum;
}
