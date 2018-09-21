class Car {
  constructor(color){
    this.color = color || 'Red';
  }
  print(){
    console.log('this.color = ' + this.color);
  }
}

class Sedan extends Car {
  constructor(kolor, doors=4){
    super(kolor);
    this.doors = doors;
  }
  // @Override
  print(){
    super.print();
    console.log('this.doors = ' + this.doors);
  }
}

var sedan = new Sedan('Blue');
console.log(sedan); // { color: 'Blue', doors: 4 }
sedan.print();







