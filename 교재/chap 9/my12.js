class Square{
  constructor(length = 10){
    this.length = length;
    //this.area = length*length;
  }
  show(){
    console.log('this.length = ' + this.length);
  }
  get area(){      //getter
    return this.length*this.length;
  }
  set area(area){     //setter
    this.length = Math.sqrt(area);
  }
}

let s = new Square();
console.log(s);
console.log(s.length);
console.log(s.area);    // getter 호출 : ()괄호 사용하지 않는다.
s.area = 400;           // setter 호출 :()괄호 사용하지 않는다.
console.log(s.area);
s.show();

//getter setter는 ()괄호 사용하지 않고,  호출한다.
//할당연산자로 호출하면 getter로
//값으로 호출하면 setter로
