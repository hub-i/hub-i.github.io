// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//     this.userGears = ['P', 'N', 'R', 'D'];
//     this.userGear = this.userGears[0];
//   }
//   shift(gear) {
//     if (this.userGears.indexOf(gear) < 0)
//       throw new Error(`Invalid gear: ${gear}`);
//     this.userGear = gear;
//   }
// }

// 실습: p227, ES6 코드를 ES5 코드로 변경하세요.



let car = new Car('Hyundai', 'Genesis');
console.log(car);
car.shift('D');
console.log(car);


