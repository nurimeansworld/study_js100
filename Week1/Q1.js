//문제 1. 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
// var nums = [100, 200, 300, 400, 500];

//박서영 답안
var nums = [100, 200, 300, 400, 500];

nums.splice(3,2);
nums // [100,200,300]

// 이승연 답안
const result = nums.slice(0, 3);
console.log(result); // [100, 200, 300]