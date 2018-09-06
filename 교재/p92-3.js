var obj ={};

const SIZE = Symbol(); //심볼은 NEW하면 안된다.

console.log(SIZE);
console.log(SIZE.toString());
console.log(typeof SIZE);
obj[SIZE] = 8;

console.log(obj[SIZE]);

obj.x =10;  //x 문자열 "x"로 취급된다.

obj[SIZE]= 8; //유니크한 심볼을 프로퍼티 키로 사용하는 방법
console.log(obj[SIZE]);
