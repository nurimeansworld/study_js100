// // 문제48 : 대소문자 바꿔서 출력하기
// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입출력
// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

let item = prompt('문자열을 입력하세요.').split('');
// let item = 'AAABBBcccddd'.split('');
let result = '';

item.forEach(ele => {
  result += (ele === ele.toUpperCase()) ? ele.toLowerCase() : ele.toUpperCase();
});
console.log(result);
