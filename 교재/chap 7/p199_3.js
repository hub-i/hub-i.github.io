

(function() {
    console.log(x);
  var x = 10;
  var x = 20;
  console.log(x);

//console.log(y); //TDZ : let,const 자원은 초기화 전에 사용이 불가능하다.
  let y =100;
  console.log(y);

  let z=2000;
  console.log(z);
  console.log(global.z);
  
}());
