// // 문제45 : getTime()함수 사용하기
// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.
// 이를 이용하여 현재 연도(2021)를 출력해보세요.

// 박누리 답안
// / 초(1000) / 분(60) / 시(60) / 일(24) / 월(30) / 년(12)
// 1분 == 60초
// 1시간 == 60분
// 1일 == 24시간
// 1개월 == 30일
// 1년 == 12개월
let todayTime = new Date().getTime();
let today = 1970 + parseInt(todayTime / 1000 / 60 / 60 / 24 / 30 / 12)
console.log(`오늘은 ${today}년 입니다.`);