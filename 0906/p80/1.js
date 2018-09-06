var str ="Hello";
var str2 = "Hello";
var str3 = new String("Hello"); //Bad!

console.log(str);
console.log(str2);
console.log(str3);
console.log(str3,toString());

console.log(str==str2);
console.log(str===str2);

console.log(str==str3);
console.log(str===str3);

var txt = "";

for(var i=0;i<10;i++){
  txt +=i;  //덮어쓰기가 안되기때문에 10개의 객체가 생성이 된다.
  //매우 나쁜 방법! 자바스크립는 Stringbuffer가 없다.
}
console.log(txt);
