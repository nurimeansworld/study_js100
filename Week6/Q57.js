// // 문제57 : 1의 개수
// 0부터 1000까지 1의 개수를 세는 프로그램을 만들려고 합니다. 예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.
// 그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.

function countOne() {}

let arr = '';
for (let i = 1; i < 101; i++) {
  // console.log(i);
  // arr.push(i);
  arr = arr + i;
}
console.log(arr);

const arrForCount = arr.slice('');
console.log(arrForCount);
