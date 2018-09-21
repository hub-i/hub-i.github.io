// class Car {
//   constructor() {
//     let count = 4;
//     this.color = 'Red';
//     this.doors = count;
//   }
//   show() {
//     console.log('this.color = ' + this.color);
//   }
//   static info(obj) {
//     console.log('obj.color = ' + obj.color);
//   }
// }

// 실습: ES6 코드를 ES5 코드로 변경하세요.
function Car() {
  let count = 4;
  this.color = 'Red';
  this.doors = count;
}
Car.prototype.show = function () {
  console.log('this.color = ' + this.color);
};
Car.info = function (obj) {
  console.log('obj.color = ' + obj.color);
};

let car = new Car();
console.log(car); // { color: 'Red', doors: 4 }
console.log(car.color); // 직접 소유한 자원을 사용
car.show(); // 자식만 사용 가능, 부모의 자원을 사용
Car.info(car); // 상속과 무관, 누구라도 사용 가능





