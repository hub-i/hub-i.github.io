//arr.push("d");      //문자 배열뒤에 하나 집어넣는것
//arr.pop("d");       //문자 배열뒤에 하나 빼는것
//arr.unshift("a");   //문자 배열앞에 하나 집어넣는것
//arr.shift("a")       //문자 배열앞에 하나 빼는것
var str ="hello";
str = str.split('').reverse().join('');
console.log(str);

str=str.concat(4, 5, 6);  //원본 유지하고 배열을 넣는것
console.log(str);
