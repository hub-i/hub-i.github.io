let globalFunc; // undefined global function

{
  let some = 'hi';
  let blockVar = 'a'; // block-scoped variable

  globalFunc = function() {
    console.log(blockVar);
  }
}

globalFunc(); // logs "a"

console.log('--------------------');

let f; // undefined function

{
  let o = {
    note: 'Safe'
  };
  
  f = function() {
    return o;
  };
}

let oRef = f();

oRef.note = "Not so safe after all!";
console.log(oRef);


