const arr = [1, 2, 3];
var ret = arr.concat(4, 5, 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
console.log(arr);
console.log(ret);

var ret1 = arr.concat([4, 5, 6]); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
console.log(ret1);
var ret2 = arr.concat([4, 5], 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
console.log(ret2);
var ret3 = arr.concat([4, [5, 6]]); // returns [1, 2, 3, 4, [5, 6]]; arr unmodified
console.log(ret3);
