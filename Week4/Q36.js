// // 문제36 : 구구단 출력하기
// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// **입출력**
// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

// 박누리 답안
var gugudan = prompt('1~9까지의 숫자 중 하나를 입력하세요.');
// var gugudan = 5;
var result = "";
for(let i = 1; i < 10; i++){
  result = `${result} ${gugudan*i}`;
}
console.log(result);

// 이승연 답안
// function gugu(n) {
//   let result = '';
//   for(let i = 1; i < 10; i ++) {
//     result += n * i + ' ';
//   }
//   return result;
// }

// const data = prompt('숫자를 입력해주세요.구구단이 출력됩니다.');

// console.log(gugu(data));

// 안소현 답안
// const num = prompt('구구단을 외자. 구구단을 외자. 몇 단?');
// let result = '';
// for(let i=1; i<10; i++){
//   result += `${num * i} `;
// }
// result = result.trim();
// console.log(result);