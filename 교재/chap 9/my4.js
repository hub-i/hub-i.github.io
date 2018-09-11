class Car{
  constructor(){
      let count = 4;
      //새로 생성되는 객체의 기본 프로퍼티를 추가하는 작업.
      this.color = 'Red';
      this.dooors = count;
  }
  // 부모가 자식객체에게 제공하는 자원
  // Car.prototype 객체에 추가한다.
  show() {
    console.log('this.color = ' + this.color);
  }
}

// Car.prototype.show = function () {
//   console.log('this.color = ' + this.color);
// }
//상속과 무관, Car 함수객체가 직접 갖고 있으면서
//누구에게나 제공하고 싶은 자원을 배치.
Car.info = function(obj){   //자바의 static 개념과 유사.
  console.log('obj.color = ' + obj.color);
}
console.log(Number.parseInt("3.14"));
let car = new Car();
console.log(car);   //Car { color: 'Red', dooors: 4 }
console.log(car.color);     // 직접소유한 자원을 사용
car.show();                 // 자식만 사용가능.부모의 자원을 사용
Car.info(car);              // 상속과 무관, 누구라도 사용
