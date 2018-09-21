//arr.push("d");      //문자 배열뒤에 하나 집어넣는것
//arr.pop("d");       //문자 배열뒤에 하나 빼는것
//arr.unshift("a");   //문자 배열앞에 하나 집어넣는것
//arr.shift("a")       //문자 배열앞에 하나 빼는것
var str ="hello";
str = str.split('').reverse().join('');
console.log(str);

console.log("---------(slice)------------------");
str=str.concat(4, 5, 6);  //원본 유지하고 배열을 넣는것
console.log(str);

console.log(str.slice(3)+" : 앞의 3개 배열을 삭제 출력");  //앞의 3개 배열을 삭제후 출력
console.log(str.slice(-3)+" : 뒤의 3개 배열을 잘라서 출력"); //뒤의 3개 배열을 잘라서 출력
console.log(str.slice(1,3)+" : "); //뒤의 3개 배열을 잘라서 출력
console.log(str.slice(-2,-1)+" : ");

console.log("---------(splice)------------------");
var arr =[1,5,7];
arr.splice(1,0,2,3,4);
console.log(arr);
arr.splice(4,2,6);  //arr[4]부터 2개 삭제후 , 6을 추가
console.log(arr);
arr.splice(1,2);
console.log(arr);

console.log("---------(copyWithin)------------------");
//헷갈리는것
var arr = [1,2,3,4,5,6,7];
console.log(arr);
ret =arr.copyWithin(1,2);
console.log(ret);
var arr = [1,2,3,4,5,6,7];
ret=arr.copyWithin(1,2,-3);
console.log(ret);

console.log("---------(substr)------------------");
var str ="Hello World";
var ret = str.substr(0,3);
console.log(ret);
var ret = str.substring(2,5);
console.log(ret);

console.log("---------(fill)------------------");
var arr = [1,2,3,4,5,6];
console.log(arr);
var ret = arr.fill("a",-4,-1) //arr[length-2]부터 a를 채워라
console.log(ret);
var arr = [1,2,3,4,5,6];
var ret = arr.fill("a",1,-2)  //arr[1]~arr[length-2]까지 a를 채워라
console.log(ret);
// var ret = array(5).fill(1);
// console.log(ret);

console.log("---------(sort())------------------");
var arr=[5,3,20,4,100]
console.log(arr);   //문자열로 인식하기땜누에 결과값이 다르다.~!!
arr.sort(function(i,j){
  return i>j;
})
console.log(arr);

console.log("---------(revers())------------------");
console.log(ret.reverse());

console.log("---------(fill, map,delete)------------------");
var arr = Array(10);
arr.fill(5);
console.log(arr);

delete arr[2];
console.log(arr);

var ret = arr.map(x=>0);
console.log(ret);
console.log(arr);
//table>thread>th>tr*3 탭 누르면 테이블 자동생성됨
