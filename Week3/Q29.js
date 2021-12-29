// // 문제29 : 대문자만 지나가세요
// 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.
// **알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램**을 만들어 주세요.

// 박누리 답안
var inputText = prompt('알파벳 하나만 입력하세요! 대문자인지 확인합니다.');
// var inputText = 'e';
result = inputText === inputText.toUpperCase() ? 'YES' : 'NO';
console.log(result);

// 안소현 답안
// const character = prompt('알파벳을 하나만 입력해 주세요.');
// character.charCodeAt(0) > 64 && character.charCodeAt(0) < 91 ? console.log('YES') : console.log('NO');