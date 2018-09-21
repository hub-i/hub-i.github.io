var ary = [10,20,30];

var fn = function(item,index,array){
  console.log(item,index,array);
  return false;
};
ary.find(fn);
// 10 0 [ 10, 20, 30 ]
// 20 1 [ 10, 20, 30 ]
// 30 2 [ 10, 20, 30 ]

//고객이 원하는 조건 : 25보다 크고, 첫 번째 요소는 건너띈다.
//대상을 찾으면 아이템(요소)을 구해달라.
var ret = ary.find(function(item,index,array){
  let isFinded = item>25 && index>0;
  //console.log(item,index,array);
  return isFinded;
});

console.log(ret);
