//문제 9. concat을 활용한 출력방법 : 다음 소스코드를 완성하여 날짜와 시간을 출력하시오.
var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

//박서영 답안
var result = year.concat(`/${month}/${day} ${hour}:${minute}:${second}`);

console.log(result); //2019/04/26 11:34:27

// 이승연 답안
// 정답: var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second)

// 박경서 답안
var result = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second
);

// 안소현 답안
// var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
// console.log(result);

// 박누리 답안
// var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
// concat을 사용하게 된다면
// var result = year.concat(`/${month}/${day} ${hour}:${minute}:${second}`);