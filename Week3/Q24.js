// // 문제24 : 대문자로 바꿔주세요!
// 민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.
// 민지를 위해 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.

// 입출력
// 입력 : mary
// 출력 : MARY

// 박누리 답안
var item = prompt('이름을 입력하세요!');
// var item = 'nuri';
item = item.toUpperCase();
console.log(item);
item = item.toLowerCase();
console.log(item);

// 안소현 답안
// const name = prompt('참가자의 이름을 입력해주세요.');
// console.log(name.toUpperCase());

// 이승연 답안 
// let text = prompt('이름을 입력해주세요');
// console.log(text.toUpperCase());
