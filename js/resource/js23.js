// setItem(key, value) : 해당 스토리지에 데이터를 저장한다
sessionStorage.setItem('money', 5000);
localStorage.setItem('age', 80);

// removeItem(key) : key를 사용해 해당 데이터를 삭제한다
// sessionStorage.removeItem('money');

// getItem(key) : key를 사용해 저장된 value를 꺼낸다
const data = sessionStorage.getItem('money');
const data2 = localStorage.getItem('age');
const data3 = sessionStorage.getItem('age');

// 스토리지는 F12 개발자 도구를 눌러 찾아가서 확인할 수 있다

console.log(data);
console.log(data2);
console.log(data3);

// 1to50 게임 만들기

const game = document.getElementById('game');
let numbers = [];
let currentNum = 1;
let startTimer;

for (let i = 1; i <= 25; i++) {
    numbers.push(i);
}

numbers.sort(() => Math.random() - 0.5);

numbers.forEach(createBtn);

startTimer = new Date();

// 버튼 만들기
function createBtn(number) {
    const btn = document.createElement('btn');
    btn.innerText = number;
    btn.onclick = () => clickBtn(btn, number);
    game.appendChild(btn);
}

// 숫자 버튼
function clickBtn(btn, clickNum) {
    if (clickNum === currentNum) {
        btn.style.display = 'none';
        numbers.shift();
        currentNum++;

        if (currentNum < 50) {
            const nextBtn = document.createElement('btn');
            nextBtn.innerText = currentNum;
            nextBtn.onclick = () => clickBtn(nextBtn, currentNum);
            game.appendChild(nextBtn);
        }
    } 
}

// 다시하기 버튼을 누르면 숫자판 초기화
function resetGame() {
    game.innerHTML = '';
    numbers = [];

    for (let i = 1; i <= 25; i++) {
        numbers.push(i);
    }
    numbers.sort(() => Math.random() - 0.5);
    numbers.forEach(createBtn);
}



