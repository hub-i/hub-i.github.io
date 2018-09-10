
 var x;
 var y;
 console.log(x);
 x=3;
 console.log(x);


if(x !== 3) {
  console.log(y);
  y = 5; //var자원은 조건문의 범위 연산자로 격리할 수 없다.
   if(y === 3) {
     x =3;
   }
 console.log(y);
}

if(x === 3) { if(x === 3) {
 console.log(y); //undefined
} }
