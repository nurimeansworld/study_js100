// // 문제25 : 원의 넓이를 구하세요
// 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.
// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

// 박누리 답안
function getArea(radius) {
  result = radius ** 2 * 3.14;
  return result;
}

var radius = prompt('반지름을 입력하세요');
// var radius = 5;
getArea(radius);
console.log(`원의 넓이는 ${result}입니다.`);

// 안소현 답안
// const PI = 3.14;
// const radius = prompt('반지름을 입력해주세요.(정수만 입력 가능)');
// console.log('넓이는', calcAreaOfCircle(parseInt(radius)));

// function calcAreaOfCircle(r) {
//   return r * r * PI;
// }


// 이승연 답안
// function Circle(radius) {
// this.radius = radius;
//	this.getDiameter = function() {
//		return Math.floor(Math.PI * this.radius * this.radius);
//	};
// }

// const circle1 = new Circle(parseInt(prompt('원의 반지름 길이를 입력해주세요')));

// console.log(circle1.getDiameter());


