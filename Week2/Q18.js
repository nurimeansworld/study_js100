// // 문제18 : 평균 점수
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.
// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// 입출력
// 입력 : 20 30 40
// 출력 : 30

// 박누리 답안
// MEMO::
// .split('/') : 문자열을 /으로 구분한 값을 배열로 저장 `배열 = 문자열.split('/');`
// .map(callback) : callback 결과를 적용한 배열로 저장
let score = prompt(
  "국어, 수학, 영어의 점수를 숫자로 입력하세요. 예시. 100 93 40"
);
arrScore = score.split(" ").map(Number); // 이렇게 하면 int가 아닌 소수점 값도 같이 변환
// arrScore = score.split(" ").map((str) => parseInt(str)); // 완전한 int값으로 하려면 이렇게
let sum = 0;
for (let i = 0; i < arrScore.length; i++) {
  sum += arrScore[i];
}
console.log(parseInt(sum / arrScore.length));


// 안소현 답안
// const scoresStr = prompt('국어, 수학, 영어 점수를 순서대로 입력해주세요. (각각의 점수는 띄어쓰기 한 번으로 구분 합니다.)');
// const scoreArr = scoresStr.trim().split(' ');
// let sum = 0;
// for (let i = 0; i < scoreArr.length; i++) {
//   sum += parseInt(scoreArr[i]);
// }

// console.log('평균:', Math.floor(sum / scoreArr.length));