const x = 19.51;

const log = console.log;

log(x.toFixed(3));
console.log(x.toFixed(2));

x.toFixed(1); // "19.5"
x.toFixed(0); // "20"

console.log(Object.keys(Number.prototype));
console.log(Reflect.ownKeys(Number.prototype));

console.log(Math.min(7,4,11,4));
console.log(Math.max(7,4,11,4));

let arr = [7,4,11,5];

console.log(Math.min(...arr));//설치연산자
