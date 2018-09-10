const arr = ["b", "c", "d"];
console.log(arr);

//arr[arr.length -1] = "e";
arr.push("e"); // returns 4; arr is now ["b", "c", "d", "e"]
console.log(arr); //push는 배열뒤에 추가한다는 의미

let ret = arr.pop(); // returns "e"; arr is now ["b", "c", "d"]
console.log(ret); //리턴값 조회 ret은 마지막것을 리턴한다는 의미
console.log(arr);

console.log(arr[arr.length -1]);
console.log("---------------------------------");

var size = arr.unshift("a"); // returns 4; arr is now ["a", "b", "c", "d"]
console.log(size);
console.log(arr); //unshift 는 앞에 추가한다는것...

var ret1 = arr.shift(); // returns "a"; arr is now ["b", "c", "d"]
console.log(ret1);
console.log(arr);


//arr.push("d");      //뒤에 하나 집어넣는것
//arr.pop("d");       //뒤에 하나 빼는것
//arr.unshift("a");   //앞에 하나 집어넣는것
//arr.shift("a")       //앞에 하나 빼는것
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
//배열을 이용하여 다음 단어를 뒤집어서 출력하세요.
//hello 문자열을 받아서 olleh 문자열을 리턴하는
//함수를 작성하세요.

var str = "hello";
console.log(str.split('')); //split을 쓰면 문자열을 배열로 출력한다.

console.log(str);
str = str.split('').reverse().join('');
console.log(str);
console.log('-----------------------------------');
function myReverse(input = ""){
  let ary = [];
  for (var i = 0; i < input.length; i++) {
    ary[i];
  }
  console.log(ary);
  let output = "";
  return output;
}
//ver result = myReverse("hello");
// console.log(result);
