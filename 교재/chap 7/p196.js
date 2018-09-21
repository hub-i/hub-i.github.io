let globalFunc; // undefined global function
{
  let some = 'hi'
//---------------------------------------------------(closer)  숨겨짐
 let blockVar = 'a'; // block-scoped variable
 globalFunc = function() {
 console.log(blockVar);
 //-----------------------------------자바가 알아서 클로저 scope를 만들어준다.
 }
}
globalFunc();


console.log('========================================');
let f; // undefined function
{
 let o = { note: 'Safe' };
 f = function() { return o; } 
}
let oRef = f();
oRef.note = "Not so safe after all!";
console.log(oRef);
