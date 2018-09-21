class Car {
  constructor() {
    let count = 4;
    // 새로 생성되는 객체의 기본 프로퍼티를 추가하는 작업
    this.color = 'Red';
    this.doors = count;
  }
  // 부모가 자식객체에게 제공하는 자원
  // Car.prototype 객체에 추가한다.
  show() {
    console.log('this.color = ' + this.color);
  }
}

// 부모가 자식객체에게 제공하는 자원
// Car.prototype.show = function () {
//   console.log('this.color = ' + this.color);
// };

// 상속과 무관, Car 함수객체가 직접 갖고 있으면서
// 누구에게나 제공하고 싶은 자원을 배치
Car.info = function (obj) {
  console.log('obj.color = ' + obj.color);
};

let car = new Car();
console.log(car); // { color: 'Red', doors: 4 }
console.log(car.color); // 직접 소유한 자원을 사용
car.show(); // 자식만 사용 가능, 부모의 자원을 사용
Car.info(car); // 상속과 무관, 누구라도 사용 가능





