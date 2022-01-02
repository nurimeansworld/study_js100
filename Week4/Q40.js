// // 문제40 : 놀이동산에 가자
// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 
// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.
// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

// **입력**
// 50
// 5
// 20
// 20
// 20
// 20
// 20

// **출력**
// 2

// 박누리 답안
var limit = Number(prompt('제한 무게를 입력하세요.'));
var count = parseInt(prompt('인원수를 입력하세요.'));
// var limit = 50;
// var count = 5;
var result = 0;
var sum = 0;
for (let i = 1; i < count+1; i++) {
  var weight = prompt( i + '번째 사람의 몸무게를 입력하세요.');
  sum += parseInt(weight);
  if (sum <= limit){
    result = i;
  }
}
console.log(`${result}명 탈 수 있습니다.`);

// 이승연 답안
// let total = 0;
// let count = 0;
// const limit = prompt('제한 무게를 입력하세요');
// const person = prompt('인원 수를 입력하세요');

// for(let i = 1; i <=person; i++) {
//   total += parseInt(prompt('무게를 입력해주세요'), 10);
//   if (total <= limit) {
//     count = i;
//   }
// }
// console.log(count);

// 안소현 답안
// const LIMIT_WEIGHT = prompt('제한무게를 입력하세요.')*1;
// const friendCnt = prompt('친구는 몇 명인가요?')*1;
// let sum = 0, cnt = 0;

// for (let i = 0; i < friendCnt; i++) {
//   const w = prompt('무게를 입력해주세요.');
//   sum += parseInt(w);
//   if(sum <= LIMIT_WEIGHT)
//     cnt +=1;
// }
// console.log(cnt);