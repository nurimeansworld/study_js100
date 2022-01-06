// // 문제46 : 각 자리수의 합 2
// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 
// 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
// 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

// 박누리 답안
function generateNum(){
  let allNum = 1;

  for(let i = 2; i < 21; i++){
    allNum += i.toString();  // allNum = allNum + i + '';
  }
  return allNum;
}

let num = generateNum();
let result = 0;
num = num.split('').map(Number);
num.forEach(element => {
  result += element;
});
console.log(result);