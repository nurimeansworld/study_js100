// // 문제37 : 반장 선거 
// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

// 박누리 답안
var votes = prompt('표를 순서대로 입력하세요.').split(' ');
// let votes = "원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(' ');
let arrCount = {};
var resultCount = 0;
var resultName = '';

votes.forEach(element => {
  arrCount[element] = (arrCount[element]) ? arrCount[element]+1 : 1;
});
for(key in arrCount){
  if(!(resultCount > arrCount[key])){
    resultCount = arrCount[key];
    resultName = key;
  }
}
console.log(`${resultName}(이)가 총 ${resultCount}표로 반장이 되었습니다.`);

// 이승연 답안
// let datas = {};
// const person = prompt('학생들이 뽑은 후보들을 입력해주세요')).split(' ');

// for (let data in person) {
//   let inx = person[data];
//   datas[inx] = datas[inx] === undefined ? 1 : datas[inx] = datas[inx] + 1;
// }

// const values = Object.values(datas).sort((a, b) => b - a);

// const result = [];
// const win = Object.keys(datas).find(key => {
//       if(datas[key] === values[0]){     
//         result.push(key);
//       }
// });

// console.log(`${result}(이)가 총 ${values[0]}표로 반장이 되었습니다.`);

// 안소현 답안
// const students = prompt('뽑힌 학생의 이름을 순서대로 입력하세요.').split(' ');
// let score = {};
// let max = 0, maxStudent='';
// students.forEach(student => {
//   // 해당 학생이 score객체에 없으면 추가
//   if (!score[student]) {
//     score[student] = 1;
//   } else {
//     score[student] += 1;
//   }

//   if(score[student] > max){
//     max = score[student];
//     maxStudent = student;
//   }
// });
// console.log(`${maxStudent}(이)가 총${max}표로 반장이 되었습니다.`);