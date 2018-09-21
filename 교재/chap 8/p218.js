
const words = [
  "Beachball", "Rodeo",  "Bali" ,"Angel",
 "Aardvark", "Xylophone", "November",
 "Chocolate", "Papaya", "Uniform",
 "Joker", "Clover"
];

//reduce 함수와 콜백 함수를 병합해서 단어 분리기 프로그램 제작
var fn = (a,x) => {     
 if(!a[x[0]]) {     //!a[x[0]] //a객체의 해당 프로퍼티가 없다면
   a[x[0]] = [];    // a[x[0]]에 빈배열[]을 할당한다.
 }

 a[x[0]].push(x);   //a객체에 프로퍼티가 있다면

 return a;
};

const alphabetical = words.reduce(fn , {});
/*
        a                      x              a[x[0]]           return
1       {}                   beachball         {B}         {'B':['Beachball']}

2  {'B':['Beachball']}         Rodeo           {R}    {'B':['Beachball'],'R':['Rodeo']}

3 {'B':['Beachball'],'R':['Rodeo']}            {B}    {'B':['Beachball','Bali'],'R':['Rodeo']}
                              Bali


*/
console.log(alphabetical);
//출력 결과~
// { B: [ 'Beachball', 'Bali' ],
//   R: [ 'Rodeo' ],
//   A: [ 'Angel', 'Aardvark' ],
//   X: [ 'Xylophone' ],
//   N: [ 'November' ],
//   C: [ 'Chocolate', 'Clover' ],
//   P: [ 'Papaya' ],
//   U: [ 'Uniform' ],
//   J: [ 'Joker' ] }
