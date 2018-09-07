function f1() {
 console.log('one');
}
function f2() {
 console.log('two');
 f1(a=2);
}
f2();
f1();
f2();
