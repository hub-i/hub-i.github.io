
//int a = 10;
//Integer b = a;
//auto-boxing : 원시타입 a의 값이 자동으로
//객체타입 Integer 자료형의 변수에 할당된다.
//short x =(short)a;

//JS 원시타입이 분명히 존재합니다.
//코드 처리시 원시타입 자동으로 객체타입으로
//전환되어 처리됩니다. ===> 처리 시 모두 객체로 취급된다.

const s = "hello";
console.log(s.toUpperCase()); //새로운 대문객체를 만들어출력
console.log(s);

s.myProp = 3;
console.log(s);
console.log(s.myProp);
