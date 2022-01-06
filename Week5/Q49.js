// // 문제49 : 최댓값 구하기
// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
// 입출력
// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

// 박누리 답안
let num = prompt('숫자 10개를 입력하세요. 구분은 공백으로 합니다. 최댓값을 출력합니다.').split('').map(Number);
// let num = '9 8 10 7 6 5 4 3 2 1'.split(' ').map(Number);
let result = num[0];

for (let i = 0; i < num.length; i++){
  result = (result < num[i]) ? num[i] : result;
}
console.log(result);
