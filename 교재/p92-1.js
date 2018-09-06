var obj={
  "key":"value",
  "key2":1,
  key3:[],
  "this is key4":{},
  //this is key4:{},에러남!!
}
console.log(obj);
console.log(obj.key);
console.log(obj.key2);
console.log(obj.key3);
// console.log(obj."this is key4");에러가 난다.
console.log(obj["this is key4"]);

//var what = { 1 , 2 , 3};      //배열
// console.log(what[0]);   //배열
// var some ={"0":10}      //객체
// console.log(some["0"]); //객체

var object = {
   a:10,
   b:20,
   print:function(){
     console.log(this.a+this.b);
   }
}
console.log("--------");
for(var variable in object){
  console.log(variable);
  //if(object.hasOwnProperty(variable)){}
  console.log("---------------------");
  console.log(object);
  console.log("=====================");
  console.log(object[variable]);
  console.log("#######################");
  if(typeof object[variable]!=='function') { //변수면 출력하고
    console.log(Object[variable]);
  } else {    //함수면 호출하자
    object[variable]();
    // object["print"]();
    // print();
  }
}
