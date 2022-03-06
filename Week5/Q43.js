// // 문제43 : 10진수를 2진수로
// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
// 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?
// **사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.**

// 박누리 답안
// let num = prompt('숫자를 입력하세요. 2진수로 바꿔 출력합니다.');
let num = 10;
// 1. toString으로 변환
console.log('2진수로', num.toString(2));

// 2. n진수간 변환
console.log('8진수로', num.toString(8)); // 10진수 -> 8진수
console.log('16진수로', num.toString(16));
console.log('2진수를 10진수로', parseInt(num.toString(2), 2));
console.log('8진수를 10진수로', parseInt(num.toString(8), 8));