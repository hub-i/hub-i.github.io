log = console.log;

let obj = {a:10};
obj.b = 20;
Object.defineProperty(obj, 'c', {
  value: 30,
  writable: false,
  enumerable: true,
  configurable: true
});
log(obj); // { a: 10, b: 20, c: 30 }

log(Object.getOwnPropertyDescriptor(obj, 'c'));

obj.c = 40; // writable: false 이므로 바뀌지 않는다.
log(obj); // { a: 10, b: 20, c: 30 }





