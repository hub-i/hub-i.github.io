// call,apply,bind 사용법

//내장 함수.
console.log(1);
function fn(){
  console.log(2);
}
console.log(3);

setTimeout(fn,5000);  //setTimeout :어떤 로직을 시간차를 두고 실행할때 쓰는것.
//2000(2초) 후에 fn함수를 setTimeout 함수 내 로직이 처리하여 호출합니다.
console.log(4);


function foo(){
  console.log(this.a); //foo.a
  setTimeout(function(){
    console.log(this);
    console.log(this.a);
  },3000)
}

foo.a = 'foo.a';
foo.call(foo); //call : this를 foo로 해라
console.log('-----------------');
global.count = 100;

function increase(){
  this.count ++;
  console.log('1 >>',this.count); //1>>101나와야함.
}
increase();

var obj = {
    count:0,
    increase,
    escalate(){
      this.count++;
      console.log('2>>',this.count);

      function increase(){
        this.count++;
        console.log('3>>',this.count);

        function lift(){
          this.count++;
          console.log('3>>',this.count);

      }
      lift();
    }
    increase();
}
}

obj.escalate();
