/*
  http://learnx.tistory.com/51
*/

// 변량
let heights = [175, 177, 179, 181, 183];

let 평균 = heights.reduce((payload, item) => 
      payload+=item, 0) / heights.length;
console.log(평균); // 179

let 편차 = heights.map(item => item - 평균);
console.log(편차); // [ -4, -2, 0, 2, 4 ]

let 편차제곱 = 편차.map(item => item * item);
console.log(편차제곱); // [ 16, 4, 0, 4, 16 ]

// 편차제곱의 평균: 변량들이 퍼져있는 정도, 분산이 크면 들죽날죽 불안정하다는 의미
let 분산 = 편차제곱.reduce((payload, item) => payload+=item, 0) / 편차제곱.length;
console.log(분산); // 8

// 분산은 수치가 너무 커서, 제곱근으로 적당하게 줄인 값
let 표준편차 = Math.sqrt(분산);
console.log(표준편차); // 2.8284271247461903

console.log('-----------------------------');

var data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
// FIXME
// data = heights;

// Donald Knuth's algorithm for calculating variance:
// Art of Computer Programming, Vol. 2: Seminumerical Algorithms, 3rd Ed., 1998
const stats = data.reduce((a, x) => {
  a.N++;
  let delta = x - a.mean;
  a.mean += delta / a.N;
  a.M2 += delta * (x - a.mean);
  console.log(a);
  return a;
}, { N: 0, mean: 0, M2: 0 });
/*
{ N: 0, mean: 0, M2: 0 }
{ N: 1, mean: 3.3, M2: 0 }
{ N: 2, mean: 4.15, M2: 1.4449999999999996 }
{ N: 3, mean: 5.166666666666667, M2: 7.646666666666666 }
{ N: 4, mean: 6.875, M2: 42.6675 }
{ N: 5, mean: 6.3, M2: 49.279999999999994 }
{ N: 6, mean: 6.25, M2: 49.355 }
{ N: 7, mean: 6.828571428571428, M2: 63.41428571428572 }
*/

if (stats.N > 2) {
  stats.variance = stats.M2 / (stats.N - 1);
  stats.stdev = Math.sqrt(stats.variance);
}

console.log('-----------------------------');

console.log(stats);
// { N: 7,
//   mean: 6.828571428571428, // 평균
//   M2: 63.41428571428572,
//   variance: 10.56904761904762, // 분산
//   stdev: 3.2510071699471257 }
