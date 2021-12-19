// // 문제16: 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력
// 입력 : 거꾸로
// 출력 : 로꾸거

// 박누리 답안
let text = prompt("문장을 입력하세요. 거꾸로 출력됩니다");
// let text = "가나다라";
// let resultText = "";
// // 이 for문이 안돌아요..ㅠ
// for (let i = text.length - 1; i == 0; i--) {
//   console.log(text[i]);
//   resultText = resultText + text[i];
//   // console.log(text.length);
//   // console.log(text[i]);
//   // i--;
//   // console.log(text[i]);
//   // i--;
//   // console.log(text[i]);
//   // i--;
//   // console.log(text[i]);
//   // i--;
//   // console.log(i);
// }
console.log(text.split("").reverse().join(""));


// 안소현 답안
// const input = prompt('로꾸거! 로꾸거! 반대로 말하기');
// let result = '';
// for (let i = input.length - 1; i >= 0; i--) {
//   result += input.charAt(i);
// }

// console.log(result);
// // console.log(Array.from(input).reverse().join(''));


// 이승연 답안
// const n = prompt('문장을 입력하세요');

// const reverseStr = n.split('').reverse().join('');
// console.log(reverseStr);


// //김초연 답안
//첫 번째 풀이
// function reverse(data) {
//     data = data + '';
//     let result = '';
//     const s = data.split('');
//     s.forEach(el => {
//         result = el + result;
//     });
//     console.log(result);
// }
// reverse('되나요');
// reverse(369);

// //두 번째 풀이
// const data = prompt('입력하세요.');
// const result = data.split('').reverse().join('');
// console.log(result);
