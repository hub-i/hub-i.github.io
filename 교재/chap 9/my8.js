// 클래스는 호이스팅이 안된다.
// 클래스는 재정의도 허용하지 않는다.

class Car{
  constructor(color){
    this.color = color ||'Red'; //옵션이 있으면 옵션값, 아니면 Red

  }
}
//Sedan is-A Car
class Sedan extends Car{

}
var car = new Car;
console.log(car);

var car = new Car('Blue');
console.log(car);

var car2 = new Car('White');
console.log(car2);
