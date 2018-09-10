const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
let a;

arr.indexOf(5); // returns 1  : arr[1] 값에 있다.
arr.lastIndexOf(5); // returns 5      : arr[5] 값에 있다.
arr.indexOf("a"); // returns 2
arr.lastIndexOf("a"); // returns 2

arr.indexOf({ name: "Jerry" }); // returns -1(없다)
arr.indexOf(o); // returns 3
arr.indexOf([1, 2]); // returns -1

arr.indexOf("9"); // returns 7
arr.indexOf(9); // returns -1
arr.indexOf("a", 5); // returns -1
arr.indexOf(5, 5); // returns 5
arr.lastIndexOf(5, 4); // returns 1
arr.lastIndexOf(true, 3); // returns -1
arr.indexOf();


console.log(a);
