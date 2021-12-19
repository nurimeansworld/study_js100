// 문제19 : 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

// 박누리 답안
let num = prompt(
  "숫자 2개를 입력하세요. 여러 숫자를 입력시 앞에서부터 2번째 숫자까지 유효합니다. 예시)3 63"
);
// let num = "4 2 10";
arrNum = num.split(" ").map(Number);
console.log(arrNum[0] ** arrNum[1]);


// 안소현 답안
// const numStr = prompt('숫자 두 개를 입력해 주세요. (각 숫자는 띄어쓰기 한 번으로 구분)');
// const numArr = numStr.split(' ').map(v => parseInt(v));
// console.log(`${numArr[0]}의 ${numArr[1]}승은?`,numArr[0]**numArr[1]);

// 이승연 답안
// const num = prompt('공백으로 구분하여 두 숫자를 입력해주세요.');
// let result = num.split(' ');
// console.log(parseInt(result[0]**result[1]));
