var arr = [1, 5, 7];

var ret = arr.splice(1, 1);
console.log(ret); // [ 5 ]
console.log(arr); // [ 1, 7 ]

arr = [1, 5, 7];

arr.splice(1, 0, 2, 3, 4); // returns []; arr is now [1, 2, 3, 4, 5, 7]
console.log(arr); // [ 1, 2, 3, 4, 5, 7 ]

arr.splice(5, 0, 6); // returns []; arr is now [1, 2, 3, 4, 5, 6, 7]
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]

arr.splice(1, 2); // returns [2, 3]; arr is now [1, 4, 5, 6, 7]
console.log(arr); // [ 1, 4, 5, 6, 7 ]

arr.splice(2, 1, 'a', 'b'); // returns [5]; arr is now [1, 4, 'a', 'b', 6, 7]
console.log(arr); // [ 1, 4, 'a', 'b', 6, 7 ]

console.log('-------------');

var arr = [1, 2, 3, 4];

// 붙여 넣을 위치, 복사 시작 위치, 복사 종료 위치 미포함

arr.copyWithin(1, 2); 
console.log(arr); // [ 1, 3, 4, 4 ]

var arr = [1, 2, 3, 4];

arr.copyWithin(1, 2, 3); 
console.log(arr); // [ 1, 3, 3, 4 ]

console.log();

var arr = [1, 2, 3, 4];

arr.copyWithin(2, 0, 2); 
console.log(arr); // [ 1, 2, 1, 2 ]

var arr = [1, 2, 3, 4];

arr.copyWithin(0, -3, -1);
console.log(arr); // [ 2, 3, 3, 4 ]

console.log('---------------------');


var array1 = [1, 2, 3, 4, 5];

// place at position 0 the element between position 3 and 4
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array [4, 2, 3, 4, 5]

// place at position 1 the elements after position 3
console.log(array1.copyWithin(1, 3));
// expected output: Array [4, 4, 5, 4, 5]



console.log('---------------------');

var str = "Hello World!";

var ret = str.substr(0, 3); // 시작, 길이
console.log(str); // Hello World!
console.log(ret); // Hel

var ret = str.substring(0, 3); // 시작, 끝 직전
console.log(str); // Hello World!
console.log(ret); // Hel





