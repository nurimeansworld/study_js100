// // 문제44 : 각 자리수의 합
// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요
// 예를들어
// 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
// 3849 = 3+8+4+9 이고 정답은 24입니다.

// 박누리 답안
let num = prompt('숫자를 입력하세요. 각 자리수의 합을 출력합니다.').split('').map(Number);
// let num = '123456'.split('').map(Number);
let result = 0;

num.forEach(element => {
  result += element;
});
console.log(result);