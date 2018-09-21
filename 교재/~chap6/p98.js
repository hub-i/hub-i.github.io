const now = new Date();

console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth()+"월");
console.log(now.getDate()+"일");
console.log(now.getHours()+"시");
console.log(now.getMinutes()+"분");
console.log(now.getSeconds()+"초");

const xmas = new Date(2018,11,25);
console.log(xmas.getDay()); //2 (0은 일요일)
const email = /@/gi;  //@문자가 포함되어있는가?
console.log(email);
console.log(email.__proto__===RegExp.prototype);
console.log(RegExp.prototype);
console.log(email.test("abc.com"));     //false @가없다.
console.log(email.test("abc@def.com")); //true @가있다.
/*
  /정규표현식/옵션
  정규표현식 선언법으로 작성하면 바로 객체로 취급된다.
*/
