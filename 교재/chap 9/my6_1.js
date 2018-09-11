// class Car{
//   constructor(){
//       let count = 4;
//       this.color = 'Red';
//       this.dooors = count;
//   }
//   // show() {
//   //   console.log('this.color = ' + this.color);
//   // }
//   // static info(obj){   //구분을 위해 static을 붙인다.
//   //   console.log('obj.color = ' + obj.color);
//   // }
// }

function Car(){
    let count = 4;
    this.color = 'Red';
    this.dooors = count;
}

Car.prototype.show = function(){
  console.log('this.color = ' + this.rcolor);
}

Car.info = function Car(obj){   //구분을 위해 static을 붙인다.
  console.log('obj.color = ' + obj.color);
}

let car = new Car();
console.log(car);   //Car { color: 'Red', dooors: 4 }
console.log(car.color);     // 직접소유한 자원을 사용
car.show();                 // 자식만 사용가능.부모의 자원을 사용
Car.info(car);              // 상속과 무관, 누구라도 사용(그래서 static사용)
