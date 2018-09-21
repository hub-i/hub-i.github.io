/*
  Recursion: 함수 내 로직이 자신 함수를 다시
  호출하는 로직
  메소드를 호출할 때 마다 메소드 내 로직이
  사용하는 데이터를 보존하는 공간은 매번 새롭게
  만들어진다.
*/

// 4! = 4 * 3 * 2 * 1
function fact(n) {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);
}
/*
      n         return          호출함수가 응답
1     4         4 * fact(3)     4 * 3 * 2 * 1
2     3         3 * fact(2)     3 * 2 * 1
3     2         2 * fact(1)     2 * 1
4     1         1
*/

var result1 = fact(4);
console.log(result1);







