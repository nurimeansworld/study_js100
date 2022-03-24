// // 문제 52 : quick sort
// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  console.log('arr', arr);

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (pivot < arr[i]) {
      left.push(arr[i]);
      console.log('left', left);
      console.log('right', right);
    } else {
      right.push(arr[i]);
      console.log('left', left);
      console.log('right', right);
    }
  }
  // console.log('left', left);
  // console.log('right', right);
  return pivot + quickSort();
}

// const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
const array = '1 10 7 3 6 20 4'.split(' ').map((n) => parseInt(n, 10));

console.log(quickSort(array));
