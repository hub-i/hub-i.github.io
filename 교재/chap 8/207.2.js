
// 배열을 이용하여 다음 단어를 뒤집어서 출력하세요.
// hello 문자열을 받아서 olleh 문자열로 리턴하는
// 함수를 작성하세요.

var str = "hello";
console.log(str.split('')); // [ 'h', 'e', 'l', 'l', 'o' ]

console.log(str); // hello
str = str.split('').reverse().join('');
console.log(str); // olleh

console.log('------------------');

function myReverse(input = "") {
  // let ary = [];
  // for (var i = 0; i < input.length; i++) {
  //   ary[i] = input[i];
  // }
  let ary = input.split('');
  console.log(ary);
  
  // let size = ary.length;
  // let arr = [];
  // for (var i = 0; i < size; i++) {
  //   arr[i] = ary.pop();
  // }
  let arr = ary.reverse();
  console.log(arr);
  
  let output = arr.join('');
  return output;
}

var result = myReverse("hello");
console.log(result); // olleh








