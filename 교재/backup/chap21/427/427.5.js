log = console.log;

let obj = {a:10};
obj.b = 20;
Object.defineProperty(obj, 'c', {
  value: 30,
  writable: true,
  enumerable: true,
  configurable: true
});
log(obj); 
// { a: 10, b: 20, c: 30 }

log(Object.getOwnPropertyDescriptor(obj, 'c'));
// { value: 30,
//   writable: true,
//   enumerable: true,
//   configurable: true }
  
Object.freeze(obj); 
// 객체안의 모든 프로퍼티가 writable: false,
// configurable: false 로 변경됩니다.

log(Object.getOwnPropertyDescriptor(obj, 'c'));
// { value: 30,
//   writable: false,
//   enumerable: true,
//   configurable: false }

log(Object.isFrozen(obj)); // true


