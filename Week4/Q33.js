// // 문제33 : 거꾸로 출력하기
// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// 입출력
// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1
// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2

// 박누리 답안
var numbers = prompt('숫자를 입력하세요. 구분은 띄어쓰기 입니다.');
// var numbers = "2 4 6 7 8";
console.log(numbers.split('').reverse().join(''));

// 이승연 답안
// const num = prompt('숫자를 입력하세요.').split(' ').reverse();
// let answer = '';
// num.forEach(item => answer += item)
// console.log(answer);

// 안소현 답안
// const nums = prompt('숫자를 차례 없이 입력해주세요. (각 숫자는 공백 하나로 구분)').split(' ');
// const reverseNums = nums.reverse();
// let result = '';
// reverseNums.forEach((num, i) => i < reverseNums.length - 1 ? result += num + ' ' : result += num);
// console.log(result);