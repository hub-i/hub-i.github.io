log = console.log;

let obj = {a:10};
obj.b = 20;
Object.defineProperty(obj, 'c', {
  value: 30,
  writable: true,
  enumerable: false,
  configurable: true
});
log(obj); 
// { a: 10, b: 20 }
// enumerable: false 이므로 로그에 출력되지 않는다.

for (var variable in obj) {
  if (obj.hasOwnProperty(variable)) {
    console.log(obj[variable]);
  }
}
// 10
// 20
console.log(obj.c); // 30

log(Object.getOwnPropertyDescriptor(obj, 'c'));






