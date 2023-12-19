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
for (let i = 1; i <= 50; i++) {
    numbers.push(i);
}
let selectedNumbers = numbers.slice(0, 25);
let nextNumbers = numbers.slice(25, 51);

let startTime = null;
let interval = null;
let nextNumber = 1;

// 섞기
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// 시간 업데이트
function updateTime() {
    const currentTime = new Date();
    const timeDiff = currentTime - startTime;

    document.querySelector('#time').textContent = (timeDiff / 1000) .toFixed(2);
}

// 버튼
function createBtn(number) {
    const btn = document.createElement('button');
    btn.innerText = number;
    btn.onclick = () => handleClick(btn);
    game.appendChild(btn);
}

// 보드 생성
function createBoard() {
    shuffle(selectedNumbers);
    shuffle(nextNumbers)
    for (let i = 0; i < 25; i++) {
        createBtn(selectedNumbers[i]);
    }
}

// 숫자 버튼
function handleClick(num) {
    if (num.innerText === '1') {
        startTime = new Date();
        interval = setInterval(updateTime, 10);
    }
    const clickNum = parseInt(num.textContent);
    if (clickNum === nextNumber) {
        num.classList.add('selected');
        num.textContent = '';
        if (nextNumber <= 25) {
            num.textContent = nextNumbers[clickNum - 1];
        } else if (nextNumber === 50) {
            clearInterval(interval);
            recordTime();
            alert('축하!')
        }
        nextNumber++;
    }
}

function recordTime() {
    const currentTime = new Date();
    const timeDiff = currentTime - startTime;
    const passTime = (timeDiff / 1000).toFixed(2);

    // 로컬 스토리지에 시간 저장
    localStorage.setItem('gameTime', passTime);
}


const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetBoard);

function resetBoard() {
    game.innerHTML = '';
    createBoard();
    nextNumber = 1;
    clearInterval(interval); // 타이머를 초기화
    document.querySelector('#time').textContent = '0.00'; // 시간을 초기화

}

// 초기 보드 생성
createBoard();
