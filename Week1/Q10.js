// 문제 10.
// 크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 
// 은비를 위해 프로그램을 작성해 주세요.

// 입력 : 5
// 출력 : 
//     *
//    ***
//   *****
//  *******
// *********

//박서영 답안

function makeTree(number) {
    for (let i=1; i<=(number); i++) {
        for (let j=1; j<=(number-i); j++) {
        document.write('&nbsp;');
    }
        for(let k=1; k<=(2*i-1); k++){
        document.write('*');
    }
        for (let j=1; j<=(number-i); j++) {
        document.write('&nbsp;');
    }
        document.write('<br>');
    }
}

makeTree(5);

// 이승연 답안
// for(let star = 1; star < 10; star+=2) {
//   console.log(' '.repeat((9 -star) / 2) + '*'.repeat(star))
// }

// 박경서 답안
// 입력이 n인 경우
function star(n){
    for(let i = 0; i < n; i++){
        for(let j = n; i < j; j--){
            document.write('&nbsp');
        }
        for(let j = 0; j <= i; j++){
            document.write('*');
        }
        for(let j = 1; j <= i; j++){
            document.write('*');
        }
        document.write('<br>');
    }    
}

// 안소현 답안
//let lines = prompt('트리를 몇 줄로 만들고 싶으세요?');
// for (let i = 1; i <= lines; i++) {
//   let line = '';
//   let asterCnt = 0;
//   for (let j = 0; j < 3 * (lines - 2); j++) {
//     if (j < lines - i) {
//       line += '&nbsp;';
//     } else {
//       line += '*';
//       asterCnt += 1;
//       if (asterCnt === 2 * i - 1) break;
//     }
//   }
//   document.write(line + '<br>');
// }

