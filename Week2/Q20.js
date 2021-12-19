// // 문제20 : 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력
// 입력 : 10 2
// 출력 : 5 0

// 박누리 답안
let num = prompt(
  "숫자 2개를 입력하세요. 여러 숫자를 입력시 앞에서부터 2번째 숫자까지 유효합니다. 예시)3 63"
);
// let num = "3 2 10";
arrNum = num.split(" ").map(Number);
console.log(`${arrNum[0] / arrNum[1]} ${arrNum[0] % arrNum[1]}`);


// 안소현 답안
const input = prompt('숫자 2개를 입력해주세요.(각 숫자는 공백 하나로 구분)').split(' ');
console.log(parseInt(input[0] / input[1]), input[0] % input[1]);

// 이승연 답안
// const n = prompt('두 숫자를 입력하세요.').split(' ');
// let result1 = parseInt(n[0], 10) 
// let result2 =  parseInt(n[1], 10);

// let answer1 = result1 / result2;
// let answer2 = result1 % result2;
// console.log(`몫: ${answer1}, 나머지: ${answer2}`);
