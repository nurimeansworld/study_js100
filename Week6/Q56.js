// // 문제56 : 객체의 함수 응용
// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.
// nationWidth = {
//      'Korea': 220877,
//      'Rusia': 17098242,
//      'China': 9596961,
//      'France': 543965,
//      'Japan': 377915,
//      'England' : 242900,
// }
// England 22023

function checkMin() {
  // const nation = nation;
  const nationWidth = {
    Korea: 220877,
    Rusia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900,
  };
  const koreaVal = nationWidth['Korea'];
  for (const [key, value] of Object.entries(nationWidth)) {
    console.log(`${key}: ${value}`);
    // if()
  }
}

const result = checkMin();
console.log(result);
