const randomLoc = Math.floor(Math.random() * 5);

const location1 = randomLoc;
const location2 = randomLoc + 1;
const location3 = randomLoc + 2;

let guesses = 0;
let hits = 0;
let isSunk = false;

while (!isSunk) {
  const guess = parseInt(prompt('전함은 어디 있을까요?'), 10);
  if (guess > 6 || guess < 0) {
    alert('올바르게 입력하세요!');
  } else {
    guesses += 1;
    if (guess === location1 || guess === location2 || guess === location3) {
      hits += 1;
      alert('명중');
      if (hits === 3) {
        isSunk = true;
        alert('침몰했습니다!');
      }
    } else {
      alert('실패');
    }
  }
}

const stats = `${guesses}번 발사했습니다. 명중률은 ${3 / guesses}입니다.`;
alert(stats);
