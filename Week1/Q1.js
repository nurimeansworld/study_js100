//문제 1. 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
// var nums = [100, 200, 300, 400, 500];

//박서영 답안
var nums = [100, 200, 300, 400, 500];

nums.splice(3, 2);
nums; // [100,200,300]

// 이승연 답안
// const result = nums.slice(0, 3);
// console.log(result); // [100, 200, 300]

// 박경서 답안
nums.splice(3, 2); // 인덱스 3부터 2개 삭제 , 원본에 영향 미침

//또는
nums.splice(-2); // 인덱스 3부터 2개 삭제
// [100, 200, 300];

//또는
nums.slice(0, 3);
//  [100, 200, 300]
// 원본에 영향 안미침

// 안소현 답안
// var nums = [100, 200, 300, 400, 500];
// nums.pop();
// nums.pop();
// console.log(nums);

// 박누리 답안
// var nums = [100, 200, 300, 400, 500];
// nums.pop();
// nums.pop();
// console.log(nums);