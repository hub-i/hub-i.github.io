/*
arr.reduce(callback[, initialValue])
callback:함수
initialValue : 초기값(시드값)

reduce함수는 arr이 가리키는 배열의 길이만큼 callback함수를 호출한다.
initialValue를 주는 경우, 1회전에서  callback 함수의 첫번째 파라미터로 전달한다.
2번째 파라미터는 배열의 첫 요소를 전달한다.
2회전부터는 이전 회전에서 return 한 값을 함수의 첫 파라미터로 전달.
두번째 파라미터는 배열의 두번째 요소를 전달한다.
...위 과정을 배열의 길이만큼 반복한다. 마지막 callback 함수의 return 값이 최종적인
리턴값이 된다.

*/

const arr = [5,7,2,4];
const sum = arr.reduce(
  (a,x)=> a+=x,     //callback
  0                 //initialvalue (초기값:시드값)
);
console.log(sum);

/*
            a             x          return
1회전       0             5             5
2회전       5             7             12
3회전       12            2             14
4회전       14            4             18
*/

/*
initialValue를 주지 않는 경우,
1회전에서  callback 함수의 첫번째 파라미터로 배열의 첫 요소를 전달한다.
두번째 파라미터는 배열의 두번째 요소를 전달한다.
2회전부터는 이전 회전에서 return 한 값을 함수의 세번째 파라미터로 전달.

콜백함수의 수행 횟수는 배열의 길이 -1 만큼 수행된다.
*/

const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => a += x);
/*
            a             x          return
1회전       5             7             12
2회전       12            2             14
3회전       14            4             18
4회전       //배열 요소를 다 썼기 때문에 4회전은 없다.
*/
