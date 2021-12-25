// // 문제27 : 객체 만들기
// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

// **입력**
// Yujin Hyewon
// 70 100

// **출력**
// {'Yujin': 70, 'Hyewon': 100}

// 박누리 답안
var inputName = prompt('학생들 이름을 입력하세요. 구분은 공백으로 합니다');
var inputScore = prompt(
  '입력한 이름 순서대로 점수를 입력하세요. 구분은 공백으로 합니다'
);
// var inputName = 'Yujin Hyewon';
// var inputScore = '70 100';

arrName = inputName.split(' ');
arrScore = inputScore.split(' ');
var result = {};
arrName.forEach((key, index) => (result[key] = arrScore[index]));
console.log(result);

// console.log(
//   arrName.reduce((obj, key, index) => ({ ...obj, [key]: arrScore[index] }), {})
// );
