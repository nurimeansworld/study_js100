// // 문제30 : 문자열 속 문자 찾기
// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.
// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

// 입력
// pineapple is yummy
// apple

// 출력
// 4

// 박누리 답안
var inputText = prompt('대상이 될 문자열을 입력하세요.');
var findText = prompt('찾을 문자열을 입력하세요.');
// var inputText = 'pineapple';
// var findText = 'apple';

console.log(
  `${inputText}에서 ${findText}는 index[${inputText.indexOf(
    findText
  )}]에 있습니다.`
);
// console.log(inputText.includes(findText));
