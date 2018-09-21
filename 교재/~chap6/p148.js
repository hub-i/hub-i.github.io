// console.log(0+0.1);
// console.log(0+0.1);
// console.log(0+0.1);

//구글검색 is Math.abs
const x =0.2, y =0.3, z=0.1;
let result = x - y +z;
console.log('result = ',result);
let equal = (Math.abs(result) < Number.EPSILON);
console.log(equal);
let n =0;

while(true){
  n +=0.1;
  //if(n===3)break; <이 방법은 안된다..!!
  if(Math.abs(n-0.3) < Number.EPSILON) break;
}

console.log('Stopped at ${n}');
