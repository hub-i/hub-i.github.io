class Car {
  constructor(color){
    this.color = color || 'Red';
  }
}

// Sedan Is-A Car.
class Sedan extends Car {
  // constructor 함수를 생략하면 넣어준다.
  // 심지어, 부모 함수에게 파라미터도 전달한다.
  // constructor(kolor){
  //   super(kolor); // this 가 부모에게 전달된다.
  // }
}

var sedan = new Sedan('Blue');
console.log(sedan); // { color: 'Blue' }








