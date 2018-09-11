class Car{
  constructor(color){
    this.color = color ||'Red'; //옵션이 있으면 옵션값, 아니면 Red
  }
  print(){
    console.log('this.color = ' + this.color);
  }
}
//Sedan is-A Car
class Sedan extends Car{
  // constructio 함수를 생략하면 넣어준다.
  //심지어 부모함수에게 파라미터도 전달한다.
  //ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  constructor(kolor,doors=4){ //초기값을 doors|| 대신 doors=4로 쓸수 있다.
    super(kolor);  //this가 부모에게 전달된다.
    this.doors = doors;
      //this.color = 'Black';
  }
  print(){
    super.print();
    console.log('this.door = ' + this.doors);
  }
}

var sedan = new Sedan();
console.log(sedan);
var sedan = new Sedan('blue',5);
console.log(sedan); //Sedan { color: 'blue', doors: 5 }
sedan.print();
