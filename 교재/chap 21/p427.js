let obj ={a:10};

console.log(obj);
console.log(obj.b=20);//이미 존재하는 객체에 b라는 프로퍼티를 추가.
console.log(obj);

Object.defineProperty(obj,'c',{
  //obj(대상 오브젝트에),c라는 프로퍼티를 추가하고, 대상을 정의
  value:30,
  writable:true,//수정불가능
  enumerable:true,//표시가능
  configurable:true //삭제가능
});
console.log(obj);
log = console.log;

log(Object.getOwnPropertyDescriptor(obj,'c'))
obj.c=40
console.log(obj);
//delete obj.c;
console.log(obj);
Object.freeze(obj)  //객체의 모든 프로퍼티를 얼리는것
obj.c=50
console.log(obj);
log(Object.getOwnPropertyDescriptor(obj,'c'))
console.log(Object.isFrozen(obj));
