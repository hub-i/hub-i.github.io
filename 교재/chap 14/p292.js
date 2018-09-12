/* - 비동기적 프로그래밍의 3가지 패러다임.

1. 콜백
2. 프라미스
3. 제너레이터

*/

console.log("1. Before timeout: " + new Date());
function f() {
 console.log("2. After timeout: " + new Date());

}
setTimeout(f, 60*1000); // one minute
console.log("3. I happen after setTimeout!");
console.log("4. Me too!");
