// // 문제41 : 소수판별
// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

// 박누리 답안
// let num = prompt('숫자를 입력하세요. 소수이면 YES, 소수가 아니면 NO를 출력합니다.');
let num = 13;

function checkPrime(num) {
  let i = 2;
  let isPrime = 'YES';

  for(; i <= num-1; i++){
  if(num%i == 0){
      // console.log(`i = ${i}, num = ${num}`);
      isPrime = 'NO';
      break;
    }
  }
  return isPrime;
}
const result = checkPrime(num);
console.log(result);