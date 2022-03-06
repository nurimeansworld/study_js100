// // 문제42 : 2020년
// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.
// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

// **제한 조건**
// 2020년은 윤년입니다.
// 2020년 a월 b일은 실제로 있는 날입니다. 
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

// 박누리 답안
// let data = prompt('요일을 알려드립니다. 2020년 a월 b일 형식에 맞춰 알고 싶은 날짜를 입력하세요. a와 b는 컴마로 구분합니다. (예. 5,25 는 5월 25일)');
const data = '8,4';

function getDay(data) {
  const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dataArr = data.split(',');
  const setDate = new Date(`2020-${dataArr[0]}-${dataArr[1]}`);
  return weekDay[setDate.getDay()];
}
const result = getDay(data);
console.log(result);
