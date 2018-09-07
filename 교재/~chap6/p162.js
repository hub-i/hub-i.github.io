//var arr1 = [1,2,3];
//let [x,y] = arr2
// console.log(x);

const arr = [1,2,3,4,5];
let [x,y,...rest]=arr;
console.log(x,y,...rest);
