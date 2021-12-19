// // 문제12 : 게임 캐릭터 클래스 만들기
// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
// 주어진 소스 코드를 수정해선 안됩니다.

// 데이터
// <여기에 class를 작성하세요.>

// const x = new Wizard(545, 210, 10);
// console.log(x.health, x.mana, x.armor);
// x.attack();

// 출력
// 545 210 10
// 파이어볼

// 박누리 답안
class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log("파이어볼");
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();


// 안소현 답안
// class Wizard {
//   constructor(health, mana, armor){
//     this.health = health;
//     this.mana = mana;
//     this.armor = armor;
//   }

//   attack(){
//     console.log('파이어볼🔥🔥🔥🔥');
//   }
// }

// const x = new Wizard(545, 210, 10);
// console.log(x.health, x.mana, x.armor);
// x.attack();

// 이승연 답안
// class Wizard {
//   constructor(health, mana, armor) {
//     this.health = health,
//     this.mana = mana,
//     this.armor = armor
//   }
//   attack() {
//     console.log('fire!');
//   }
// }

