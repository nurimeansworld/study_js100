// 문제34 : sort 구현하기
// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 
// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

// 입출력
// 입력 : 176 156 155 165 166 169
// 출력 : NO
// 입력 : 155 156 165 166 169 176
// 출력 : YES

// 박누리 답안
var heights = prompt('키를 순서대로 입력하세요. 구분은 띄어쓰기 입니다.').split(' ');
// var heights = "176 156 155 165 166 169".split(' ');
var result = "YES";
for (let i = 0; i < heights.length; i ++){
  if((heights[i] - heights[i+1]) > 0 ){
    result = 'NO';
    break;
  }
}
console.log(result);

// 이승연 답안
// const data = prompt('키를 공백으로 구분하여 입력해주세요');
// let result = data.split(' ').sort((a, b) => a - b).join(' ');
// const answer = data === result ? 'Yes' : 'No';
// console.log(answer);

// 안소현 답안
// const inpOrder = prompt('앉은 순서대로 키를 입력 해주세요.').split(' ');
// let result = 'YES';
// for (let i = 1; i < inpOrder.length; i++) {
//   if (parseInt(inpOrder[i]) < parseInt(inpOrder[i - 1])) {
//     result = 'NO';
//     break;
//   }
// }
// console.log(result);