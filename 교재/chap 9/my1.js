// function Car() {
//
// }

//타 언어의 클래스 문법에 고착된 사고방식을 갖고 있는
//개발자들이 JS 생성자 함수 개념을 어려워하므로
//타언어에서 지원하는 문법과 비슷한 문법을 지원하기
//시작했습니다. 더불어서 생성자 함수임에도 메소드처럼 사용하는 것을
//막지못했던 부분을 class 키워드로 생성자 함수를 만들면 막을수 있습니다.

class Car{      //자바의 class와는 다른 새로운 생성자 함수이다.
}
//TypeError: Class constructor Car cannot be invoked without 'new'
//console.log(Car()); //잘못된 사용 대문자라서 객체로 인식.

let car = new Car();
console.log(car);
