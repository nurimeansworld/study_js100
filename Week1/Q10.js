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