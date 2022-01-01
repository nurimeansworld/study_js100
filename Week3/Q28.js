// // 문제28 : 2-gram
// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// 입력
// Javascript

// 출력
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.

// 박누리 답안
function twoGram(string) {
  for (let i = 0; i < string.length - 1; i++)
    console.log(`${string[i]} ${string[i + 1]}`);
}
var inputString = prompt('문자열을 공백없이 입력하세요');
twoGram(inputString);


// 안소현 답안
// const str = prompt('문자열을 입력해 주세요');

// for(let i=1; i<str.length; i++){
//   console.log(str[i-1], str[i]);
// }

// 이승연 답안
// let text =  prompt('글자를 입력하세요');
// let result = [];
// for (let i=0; i < text.length; i+=2) {
//   result.push(text[i], text[i+1]);
//   console.log(result[i], result[i+1]);
// }


