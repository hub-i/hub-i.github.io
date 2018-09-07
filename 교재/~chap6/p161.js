// a normal object
const obj = { b: 2, c: 3, d: 4 };   //객체이다.
const {a, b, c} = obj;
// var a;
// var b = obj.b;
// var c = obj.c;

console.log(a,b,c);
// console.log(b);
// console.log(c);
({a, b, c} = obj);

console.log(a,b,c);

const arr = [1,2,3];
let [x, y] = arr;
console.log(x,y);
console.log("--------------------------");
const arr2 = [1,2,3,4,5,];
//...rest : 나머지 파라미터
// 말 그대로 나머지 값들을 모아서 배열로 할당한다.
let [x , y, ...rest] = arr2;
console.log(x);
console.log(y);
console.log(rest);
console.log(Array.isArray(rest2));
console.log();

// object destructuring assignment
// const {a, b, c} = obj;              //객체가 아니다.
// a; // undefined: there was no property "a" in obj
// b; // 2
// c; // 3
// d; // reference error: "d" is not defined
