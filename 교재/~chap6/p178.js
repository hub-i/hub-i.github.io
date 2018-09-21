function add(a,b){  //함수
  return a+b;
}

const o = {
 name: 'Julie',
 greetBackwards: function() { //메소드
   // 지역함수
   const self = this; //추가해야 에러가 안난다.
   function getReverseName() {  //함수
        let nameBackwards = '';
         for(let i=self.name.length-1; i>=0; i--) {
           nameBackwards += self.name[i];
         }
     return nameBackwards;
     }
 return `${getReverseName()} si eman ym ,olleH`;
 },
};
console.log(o.greetBackwards());
